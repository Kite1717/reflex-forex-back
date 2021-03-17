  
const  express  =  require("express");
const db = require( "../models");

const Op = db.Sequelize.Op;

// Middlewares
const auth = require('../middlewares/auth');

const fs = require('fs');


//Roles
const {UserRolls} = require("../helpers/enum")

//file uploads handler
const upload = require("../helpers/upload")

const app = express.Router();

//**************Route Level 1

//upload image for fti library 
app.post('/upload-image',  upload.single('file'),async (req, res) => {

  try{
    const file = req.file;
    if (!file) {
     return res.status(400).json({
        type: false,
        data: 'No file is selected.',
      });
    }


    let tipStatus = req.body.IsNonTIP === "false" ? false : true

    db.Tvr.update({IsNonTIP :tipStatus }, {where: {TipAdi: req.body.code},returning: true}).then(result_0 =>{

    
      db.Fti.create({
        file : file.filename,
        code : req.body.code,
        catId : req.body.catId,
        subCatId : req.body.subCatId,
        IsNonTIP:tipStatus,
        createdAt: new Date(),
        updatedAt: new Date(),
  
      }).then(result => {
        return res.status(201).json({
          type: true,
          message: 'Image is uploaded.',
          data: {
            recordResult: result,
            file,
          },
        });
      }).catch(e => {
        return res.json({
          type: false,
          data: e.toString()
        })
      })
    })


    

    
  }
  catch(err)
  {
    return res.status(500).json(err)
  }

});



//all image file 
app.post('/find',auth([UserRolls.Admin,UserRolls.Trainer,UserRolls.CompanyAdmin]),async (req, res) => {
 
  const{filter,pageNumber,pageSize,sortField,sortOrder} = req.body.queryParams

  //filtering
  const {code,catId,subCatId} = filter;
  
  let conditions  = {}
  if(code)
  {
    conditions.code = { [Op.like]: `%${code}%` } ;
  }
  if(catId)
  {
    conditions.catId = catId ;
  }

  if(subCatId)
  {
    conditions.subCatId =  subCatId  ;
  }


 
 
  db.Fti.findAndCountAll({
    order: [
      [sortField,String(sortOrder.toUpperCase())],
      ],
      limit : pageSize,
      offset : pageSize * (pageNumber-1),
      where  :conditions
  }).then(result => {
    return res.json({
      type: true,
      totalCount : result.count,
      entities: result.rows,
    });
  }).catch(e => {
    return res.json({
      type: false,
      data: e.toString()
    })
  })
});


//delete image
app.delete('/:id',auth([UserRolls.Admin,UserRolls.Trainer,UserRolls.CompanyAdmin]), async (req, res) => {
  const id = req.params.id;
    db.Fti.update({deleterUserId: req.user.id,deletedAt : new Date()}, {where: {id}},).then((result1) =>{

      db.Fti.findOne({where: {id:id},paranoid:false}).then(result => {

        try {
          const appRoot = require('app-root-path');
          fs.unlinkSync(appRoot +`/uploads/${result.file}`);
         
        } catch (err) {
          return res.json({
            type: false,
            data: err.toString()
          })
        }
        return res.json({
          type: true,
          data: "Image Deleted"
        });


      }).catch(e => {
        return res.json({
          type: false,
          data: e.toString(),
        });
      });

    }).catch(e => {
      return res.json({
        type: false,
        data: e.toString()
      })
    })
 
});


app.get('/find/:code',auth([UserRolls.Admin,UserRolls.Trainer,UserRolls.CompanyAdmin]), async (req, res) => {
 

  const {code} = req.params
  db.Fti.findOne({
 
      where  :{code ,}
  }).then(result => {
  
   
   
    return res.json({
      type: result ? true : false,
      code  :result.dataValues.code  ,
    });
  }).catch(e => {
    return res.json({
      type: false,
      data: e.toString()
    })
  })
 
});


module.exports = app;