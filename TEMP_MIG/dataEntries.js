const  express  =  require("express");
const db = require( "../models");

// Middlewares
const auth = require('../middlewares/auth');


//Roles
const {UserRolls} = require("../helpers/enum")

const app = express.Router();

//**********Router level 0

//create table monthly indvidual results
app.post("/mir",auth([UserRolls.Admin,UserRolls.Trainer,UserRolls.CompanyAdmin]),async(req,res)=>{

    const data = req.body
   
    const rows = []

    for(let i = 0 ; i < data.length ; i++)
    {
        rows.push({

            CihazKimlikNo:data[i][0],
            Soyadı :data[i][1],
            Firma : data[i][2], 
            BagajSayisi:data[i][3],
            TIPSayisi:data[i][4],
            IsabetSayisi:data[i][5],
            YanlisAlarmSayisi:data[i][6],
            KacirildiSayisi:data[i][7],
            IsabetOran:data[i][8],
            YanlisAlarmOran:data[i][9],
            IsabetSuresi:data[i][10],
            YanlisAlarmSuresi:data[i][11],
            TIPSayisiBombs:data[i][12],
            IsabetSayisiBombs:data[i][13],
            KacirildiSayisiBombs:data[i][14],
            IsabetOraniBombs:data[i][15],
            TIPSayisiGuns:data[i][16],
            IsabetSayisiGuns:data[i][17],
            KacirildiSayisiGuns:data[i][18],
            IsabetOraniGuns:data[i][19],
            TIPSayisiKnife:data[i][20],
            IsabetSayisiKnife:data[i][21],
            KacirildiSayisiKnife:data[i][22],
            IsabetOraniKnife:data[i][23],
            TIPSayisiOthers:data[i][24],
            IsabetSayisiOthers:data[i][25],
            KacirildiSayisiOthers:data[i][26],
            IsabetOraniOthers:data[i][27] === '\0' ? "" : data[i][27],  
          

            createdAt: new Date(),
            updatedAt: new Date(),
            creatorUserId : req.user.id,

        })
    }

    db.Mir.bulkCreate(rows)
        .then(result =>{
            return res.json({
            type: true,
            data: "Rows Added"
            });
        }).catch(e => {

          
            return res.json({
            type: false,
            data: e.toString()
            })
         })
})


//create table  indvidual results

app.post("/ir",auth([UserRolls.Admin,UserRolls.Trainer,UserRolls.CompanyAdmin]),async(req,res)=>{

    const data = req.body
   
//PayloadTooLargeError: request entity too large
    const rows = []

    for(let i = 0 ; i < data.length ; i++)
    {
        rows.push({

            CihazKimlikNo:data[i][0],
            Soyadı : data[i][1], 
            Firma :data[i][2],
          
            Site:data[i][3],
            AltSite:data[i][4],
            Makine:data[i][5],
            MakineSeriNo:data[i][6],
            Tarih:data[i][7],
            TehditKategorisi:data[i][8],
            TehditDosyaAdi:data[i][9],
            Karar:data[i][10],
            IsabetSuresi:data[i][11],
            YanlisAlarmSuresi:data[i][12] === '\0' ? "" : data[i][12],
          
            createdAt: new Date(),
            updatedAt: new Date(),
            creatorUserId : req.user.id,

        })
    }

    db.Ir.bulkCreate(rows)
        .then(result =>{
            return res.json({
            type: true,
            data: "Rows Added"
            });
        }).catch(e => {

          
            return res.json({
            type: false,
            data: e.toString()
            })
         })
})



//create table  general library hit rate
app.post("/glhr",auth([UserRolls.Admin,UserRolls.Trainer,UserRolls.CompanyAdmin]),async(req,res)=>{

    const data = req.body
    

    const rows = []

    for(let i = 0 ; i < data.length ; i++)
    {
        rows.push({


            TIPSayisi:data[i][0],
            IsabetSayisi : data[i][1], 
            IsabetOrani :data[i][2],
          
            TIPSayisiBombs:data[i][3],
            IsabetSayisiBombs:data[i][4],
            IsabetOraniBombs:data[i][5],
            TIPSayisiGuns:data[i][6],
            IsabetSayisiGuns:data[i][7],
            IsabetOraniGuns:data[i][8],
            TIPSayisiKnife:data[i][9],
            IsabetSayisiKnife:data[i][10],
            IsabetOraniKnife:data[i][11],
            TIPSayisiOthers : data[i][12],
            IsabetSayisiOthers : data[i][13],
            IsabetOraniOthers:data[i][14] === '\0' ? "" : data[i][14],
           
            createdAt: new Date(),
            updatedAt: new Date(),
            creatorUserId : req.user.id,

        })
    }

    db.Glhr.bulkCreate(rows)
        .then(result =>{
            return res.json({
            type: true,
            data: "Rows Added"
            });
        }).catch(e => {

          
            return res.json({
            type: false,
            data: e.toString()
            })
         })
})



//create table input output
app.post("/io",auth([UserRolls.Admin,UserRolls.Trainer,UserRolls.CompanyAdmin]),async(req,res)=>{

    const data = req.body
  


    const rows = []

    for(let i = 0 ; i < data.length ; i++)
    {
        rows.push({


          
            CihazKimlikNo:data[i][0],
            Soyadı : data[i][1], 
            Firma :data[i][2],
            Site:data[i][3],
            AltSite:data[i][4],
            Makine:data[i][5],
            MakineSeriNo:data[i][6],
            GirisTarihi:data[i][7],
            CikisTarihi:data[i][8] === '\0' ? "" : data[i][8],
           
            createdAt: new Date(),
            updatedAt: new Date(),
            creatorUserId : req.user.id,

        })
    }

    db.Io.bulkCreate(rows)
        .then(result =>{
            return res.json({
            type: true,
            data: "Rows Added"
            });
        }).catch(e => {

          
            return res.json({
            type: false,
            data: e.toString()
            })
         })
})


//create table  tip visual results
app.post("/tvr",auth([UserRolls.Admin,UserRolls.Trainer,UserRolls.CompanyAdmin]),async(req,res)=>{

    const data = req.body
  

    const rows = []

    for(let i = 0 ; i < data.length ; i++)
    {
        rows.push({

          
            TipAdi:data[i][0],
            DosyaAdi : data[i][1],
            Kategori : data[i][2], 
            GosterilenTipSayisi :data[i][3],
            IsabetSayisi:data[i][4],
            IptalSayisi:data[i][5],
            KacirildiSayisi:data[i][6],
            IsabetOrani:data[i][7],
            IptalOrani:data[i][8],
            KacirildiOrani:data[i][9] === '\0' ? "" : data[i][9],
          
            createdAt: new Date(),
            updatedAt: new Date(),
            creatorUserId : req.user.id,

        })
    }

    db.Tvr.bulkCreate(rows)
        .then(result =>{
            return res.json({
            type: true,
            data: "Rows Added"
            });
        }).catch(e => {

          
            return res.json({
            type: false,
            data: e.toString()
            })
         })
})



module.exports = app;