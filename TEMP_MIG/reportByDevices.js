  
const  express  =  require("express");
const db = require( "../models");
const Op = db.Sequelize.Op;


// Middlewares
const auth = require('../middlewares/auth');




//Roles
const {UserRolls} = require("../helpers/enum")



const app = express.Router();


app.post('/input-output/find',auth([UserRolls.Admin,UserRolls.Trainer,UserRolls.CompanyAdmin]),async (req, res) => {
 
    const{filter,pageNumber,pageSize,sortField,sortOrder} = req.body.queryParams

    //filtering
    const {MakineSeriNo} = filter;


    let conditions  = {}

      conditions.MakineSeriNo = MakineSeriNo;
    
    
   
    db.Io.findAll({
        where  :conditions
    }).then(result => {


        let deviceIds = []
    for(let i = 0 ; i< result.length ;i ++)
    {

        if(deviceIds.indexOf(result[i].CihazKimlikNo) ===-1 )
        {
            deviceIds.push(result[i].CihazKimlikNo)
        }

      
    }

    db.User.findAndCountAll({

        order: [
            [sortField,String(sortOrder.toUpperCase())],
            ],
            limit : pageSize,
            offset : pageSize * (pageNumber-1),
            where  :{deviceIdNo : deviceIds}
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



      
    }).catch(e => {
      return res.json({
        type: false,
        data: e.toString()
      })
    })
  });
  



  app.post('/ind-result/device/find',auth([UserRolls.Admin,UserRolls.Trainer,UserRolls.CompanyAdmin]),async (req, res) => {
 
    const{filter,pageNumber,pageSize,sortField,sortOrder} = req.body.queryParams

    //filtering
    const {MakineSeriNo} = filter;


    let conditions  = {}

      conditions.MakineSeriNo = MakineSeriNo;
    
    
  
    db.Ir.findAndCountAll({

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

   
  });

})
  




module.exports = app;