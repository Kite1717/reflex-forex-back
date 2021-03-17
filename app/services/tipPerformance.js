  
const  express  =  require("express");
const db = require( "../models");
const Op = db.Sequelize.Op;


// Middlewares
const auth = require('../middlewares/auth');




//Roles
const {UserRolls} = require("../helpers/enum")



const app = express.Router();


app.post('/find/tip',auth([UserRolls.Admin,UserRolls.Trainer,UserRolls.CompanyAdmin]),async (req, res) => {
 
    const{filter,pageNumber,pageSize,sortField,sortOrder} = req.body.queryParams
  
   
      //filtering
  const {Kategori,TipAdi} = filter;
 


  let conditions  = {
    IsNonTIP : false, 
    GosterilenTipSayisi: { [Op.ne] : "0" },
  }
  if(Kategori && Kategori !== "All")
  {
    conditions.Kategori = Kategori ;
  }
  if(TipAdi  && TipAdi !== "")
  {
    conditions.TipAdi = { [Op.like]: `%${TipAdi}%` };
  }
   

   
    db.Tvr.findAndCountAll({
      order: [
        [sortField,String(sortOrder.toUpperCase())],
        ],
        limit : pageSize,
        offset : pageSize * (pageNumber-1),
        where  : conditions
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

  app.post('/find/non-tip',auth([UserRolls.Admin,UserRolls.Trainer,UserRolls.CompanyAdmin]),async (req, res) => {
 
    const{filter,pageNumber,pageSize,sortField,sortOrder} = req.body.queryParams
  
   
      //filtering
  const {Kategori,TipAdi} = filter;
 


  let conditions  = {
    IsNonTIP : true, 
    GosterilenTipSayisi: { [Op.ne] : "0" },
  }
  if(Kategori && Kategori !== "All")
  {
    conditions.Kategori = Kategori ;
  }
  if(TipAdi  && TipAdi !== "")
  {
    conditions.TipAdi = { [Op.like]: `%${TipAdi}%` };
  }
   

   
    db.Tvr.findAndCountAll({
      order: [
        [sortField,String(sortOrder.toUpperCase())],
        ],
        limit : pageSize,
        offset : pageSize * (pageNumber-1),
        where  : conditions
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








module.exports = app;