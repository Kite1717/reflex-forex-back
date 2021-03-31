const  express  =  require("express");
const db = require( "../models");

// Middlewares
const auth = require('../middlewares/auth');


//Roles
const {UserRolls} = require("../helpers/enum")

const app = express.Router();

//**********Router level 1

//create tip device info results
app.post("/new",auth([UserRolls.Admin,UserRolls.Trainer,UserRolls.CompanyAdmin]),async(req,res)=>{

     const {systemInformation} = req.body

     systemInformation.standAloneMode = Boolean(Number(systemInformation.standAloneMode )) 
     systemInformation.networkMode =  Boolean(Number(systemInformation.networkMode )) 
     systemInformation.createdAt  = new Date()
     systemInformation.updatedAt = new Date(),
     systemInformation.creatorUserId = req.user.id
     db.Tdi.create(systemInformation).then(result => {

        return res.json({
        systemInformation: result,
        });
    
      }).catch(err => {
         return res.status(500).json(err);
      });
      
     
})
   


//find tip device infos 
app.post('/find',auth([UserRolls.Admin,UserRolls.Trainer,UserRolls.CompanyAdmin]),async (req, res) => {
 
    const{filter,pageNumber,pageSize,sortField,sortOrder} = req.body.queryParams
    db.Tdi.findAndCountAll({
      order: [
        [sortField,String(sortOrder.toUpperCase())],
        ],
        limit : pageSize,
        offset : pageSize * (pageNumber-1)
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




//delete tip system info
app.delete('/:id',auth([UserRolls.Admin,UserRolls.Trainer,UserRolls.CompanyAdmin]), async (req, res) => {
    const id = req.params.id;
      db.Tdi.update({deleterUserId: req.user.id,deletedAt : new Date()}, {where: {id: id}},).then(result =>{
        return res.json({
          type: true,
          data: "Info Deleted"
        });
      }).catch(e => {
        return res.json({
          type: false,
          data: e.toString()
        })
      })
   
  });

module.exports = app;