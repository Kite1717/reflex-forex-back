  
const  express  =  require("express");
const db = require( "../app/models");
const Op = db.Sequelize.Op;


// Middlewares
const auth = require('../app/middlewares/auth');

const fs = require('fs');


//Roles
const {UserRolls} = require("../app/helpers/enum")

//file uploads handler
const upload = require("../app/helpers/upload")

const app = express.Router();

//**************Route Level 1

//upload image for cti library 
app.post('/upload-image',  upload.single('file'),async (req, res) => {

  try{
    const file = req.file;
    if (!file) {
     return res.status(400).json({
        type: false,
        data: 'No file is selected.',
      });
    }


    console.log(req.body,"xxxxxxxxxxxx")
     db.Cti.create({
      file : file.filename,
      code : req.body.code,
      IsNonTIP:req.body.IsNonTIP === "false" ? false : true,
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
  const {code} = filter;
  let conditions  = {}
  if(code)
  {
    conditions.code = { [Op.like]: `%${code}%` } ;
  }

 
 
  db.Cti.findAndCountAll({
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
    db.Cti.update({deleterUserId: req.user.id,deletedAt : new Date()}, {where: {id}},).then((result1) =>{

      db.Cti.findOne({where: {id:id},paranoid:false}).then(result => {

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
  db.Cti.findOne({
 
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