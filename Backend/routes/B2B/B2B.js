var express = require('express');
var router = express.Router();
const db = require('../../modules/mysql_config');
const multer = require('multer');
// const upload = multer({ dest: 'public/stylesheets/uploads/' })
// console.log(process.env.MYSQL_DB);
// console.log(process.env.MYSQL_HOST);

//上傳檔案的multer設定
const ext = {
    'image/jpeg':'.jpg',
    'image/png':'.png',
    'image/gif':'.gif',
  }
  const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
      cb(null, 'public/stylesheets/images/');
    },
    filename:(req,file,cb)=>{
       cb(null, new Date().getTime() + ext[file.mimetype]);
    }
  })
  console.log("storage",storage) 
  const fileFilter = (req,file,cb)=>{ 
    cb(null, !!ext[file.mimetype]);
  }
  const upload = multer({storage, fileFilter});
/*****************************************************/
// const fileStorageEngine = multer.diskStorage({
//   destination:(req,file,cb)=>{
//       cb(null,'public/uploads')
//   },
//   filename:(req,file,cb)=>{
//       cb(null,Date.now()+'--'+ file.originalname)
//   },
// })
// // const fileFilter = (req,file,cb)=>{ 
// //      cb(null, !!ext[file.mimetype]);
// //    };

// const upload = multer({storage :fileStorageEngine});

//http://localhost:5000/B2B/B2B/direction
router.route('/B2B/direction')
.get(async (req,res,next)=>{
    try {
        const sql = "SELECT * FROM exhibition_direction";
        const [datas] = await db.query(sql);
       res.json(datas);
    } catch (error) {
        console.log(error)
    }

})
//http://localhost:5000/B2B/B2B/city
router.route('/B2B/city')
.get(async (req,res,next)=>{
  const sql = "SELECT * FROM exhibition_city";
  const [datas] = await db.query(sql);
 res.json(datas);
})
//http://localhost:5000/B2B/B2B/kind
router.route('/B2B/kind')
.post(upload.none(),async (req,res,next)=>{
  
  // const sql1 ="INSERT INTO exhibition_ticket(name,price,tintro,amount)VALUES(?,?,?,?)";
  const sql1 ="INSERT INTO exhibition_ticket(name,price,tintro,amount)VALUES ?";


  console.log("req.body",req.body) 
  const temp =req.body
  const output = []
  for (let i=0 ;i<temp.length;i++){
    output.push(
      [
      temp[i].name,
      temp[i].price,
      temp[i].tintro,
      temp[i].amount]
      
    )
    console.log('temp[i].name', temp[i].name)
  }
  const [datas] =  await db.query(sql1,[output]);
  
  

  res.send('新增資料');
    
 
})



  // Get http://localhost:5000/B2B/B2B
  router.route('/B2B')
  .get(async (req,res,next)=>{
    try {
      const sql = 'SELECT id,aName,pic1,pic2,date_format(start,"%Y-%m-%d") as start,date_format(end,"%Y-%m-%d") as end,date_format(time,"%Y-%m-%d") as time,intro,fkCityID,fkMuseumId,fkKindID FROM exhibition_actadm ORDER BY TIME DESC';
      const [datas] = await db.query(sql);
     res.json(datas);
      
    } catch (error) {
      console.log(error)
    }
    })

    //POST http://localhost:5000/B2B/B2B
   
     .post(upload.array("img"),async (req,res,next)=>{ //多張圖片
        try {
            console.log(req.body) 
            // console.log("11111",req.files[0].filename) 
            // console.log(req.files[1].filename)      
            //解構 req.body req.file 
            const{aName,start,end,time,intro,fkCityId,fkMuseumId,fkKindId} = req.body 
            const{name,price,tintro,amount} =req.body
            const{direction} =req.body
            // console.log(fkCityId)
            // console.log(fkMuseumId)
            // console.log(fkKindId)
            // console.log(direction)
            // console.log('name', name)
            // console.log('price', price)
            // console.log('tintro', tintro)
            // console.log('amount', amount)
            // console.log('name[0]', name)
    
           const sql ="INSERT INTO exhibition_actadm(aName,pic1,pic2,start,end,time,intro,fkCityId,fkMuseumId,fkKindId)VALUES(?,?,?,?,?,now(),?,?,?,?)";
           const sql1 ="INSERT INTO exhibition_ticket(name,price,tintro,amount)VALUES(?,?,?,?)";
           
           const [datas] = await db.query(sql,[aName,req.files[0].filename,req.files[1].filename,start,end,intro,fkCityId,fkMuseumId,fkKindId],);
           const [datas2] = await db.query(sql1,[req.body.name,req.body.price,req.body.intro,req.body.amount],);
           insertId: 18
           console.log('datas', datas) 
           console.log('datas[0].insertId', datas.insertId)
   
          
           
           // insertId: 11
           console.log('datas2', datas2) 
           console.log('datas2.insertId', datas2.insertId)
   
           const sql3 = "INSERT INTO exhibitionticket(fkActId,fkTicketId)VALUES(?,?)";
           // rows[0].insertId
           const [datas3]= await db.query(sql3,[datas.insertId,datas2.insertId])
          
           console.log('datas3', datas3)  
           res.send("新增票券")
        } catch (error) {
            console.log(error)
        }


       
      //  const sql1 ="INSERT INTO exhibition_ticket(name,price,tintro,amount)VALUES ?";
       
      //  console.log("req.body",req.body) 
      //  const temp =req.body
      //  const output = []
      //  for (let i=0 ;i<temp.length;i++){ console.log('temp[i].name', temp[i].name)
      //    output.push(
      //      [
      //        temp[i].name,
      //        temp[i].price,
      //        temp[i].tintro,
      //        temp[i].amount,
      //       ]
            
      //       )
           
      //     }
      //     const [datas2] =  await db.query(sql1,[output]);
          


       
      

        // const [datas2] = await db.query(sql1,[req.body.name,req.body.price,req.body.intro,req.body.amount],); 
        

    })
    //新增票券
    // .post(upload.none(),async (req,res,next)=>{
    //   console.log(req.body) 
    //   const{name,price,tintro,amount} =req.body
    //   console.log('name[0]', name)
      
    //   // const sql1 ="INSERT INTO exhibition_ticket(name,price,tintro,amount)VALUES(?,?,?,?)";
    //   const sql1 ="INSERT INTO exhibition_ticket(name,price,tintro,amount)VALUES ?";
    //   const [datas2] = await db.query(sql1,[req.body.name[1],req.body.price,req.body.intro,req.body.amount],); 
    //   console.log('datas2', datas2) 
      // console.log('name[0]', name)
      // console.log('datas2.insertId', datas2.insertId)
        
      // res.send("新增票券")
  // })
      //
      
      // db.connect(function(err) {
      //   if (err) throw err;
      //   console.log("Connected!");
      //   var sql = "INSERT INTO customers (name, address) VALUES ?";
      //   var values = [
      //     ['John', 'Highway 71'],
      //     ['Peter', 'Lowstreet 4'],
      //     ['Amy', 'Apple st 652'],
      //     ['Hannah', 'Mountain 21'],
      //     ['Michael', 'Valley 345'],
      //     ['Sandy', 'Ocean blvd 2'],
      //     ['Betty', 'Green Grass 1'],
      //     ['Richard', 'Sky st 331'],
      //     ['Susan', 'One way 98'],
      //     ['Vicky', 'Yellow Garden 2'],
      //     ['Ben', 'Park Lane 38'],
      //     ['William', 'Central st 954'],
      //     ['Chuck', 'Main Road 989'],
      //     ['Viola', 'Sideway 1633']
      //   ];
      //   con.query(sql, [values], function (err, result) {
      //     if (err) throw err;
      //     console.log("Number of records inserted: " + result.affectedRows);
      //   });
      // });




          //   //連接 活動 和票券 (多對多)
          //   .post(upload.none(),async (req,res,next)=>{
          //     const sql3 = "INSERT INTO exhibitionticket(fkActId,fkTicketId)VALUES(?,?)";
          //     // rows[0].insertId
          //     const [datas3]= await db.query(sql3,[datas.insertId,datas2.insertId])
            
          //     console.log('datas3', datas3)  
          // })
  


    // GET http://localhost:5000/B2B/B2B/id
  router.route('/B2B/:id')
    .get(async (req,res,next)=>{
      console.log('req.params.id', req.params.id)
        const id = req.params.id;
        const sql = "SELECT * FROM exhibition_actadm WHERE id=?";
        const [datas] = await db.query(sql,[id]);
       res.json(datas);
      //  res.send(`讀取${id}的資料`)
    })
    //修改
    .put(upload.array("img"), async (req,res,next)=>{
        try {
            
            let output = {
                ok:false
            }
    
            // aName,pic1,pic2,start,end,time,intro,fkCityId,fkMuseumId,fkKindId
            const{aName,start,end,time,intro,fkCityId,fkMuseumId,fkKindId} = req.body
            console.log('req.body.id', req.body.id)  
            console.log('req.params.id', req.params.id)
            const id = req.params.id;
            const sql = "UPDATE exhibition_actadm SET id=?,aName=?,pic1=?,pic2=?,start=?,end=?,intro=?,fkCityId=?,fkMuseumId=?,fkKindId=? WHERE id=?";
    
            const sql1 ="UPDATE exhibition_ticket SET id=?,name=?,price=?,introT=?,amount=? WHERE tid=?";
    
            // const sql2 ="UPDATE exhibition_"
    
            const [datas] = await db.query(sql,[id,aName,req.files[0].filename,req.files[1].filename,start,end,intro,fkCityId,fkMuseumId,fkKindId,id],);
            const [datas2] = await db.query(sql1,[id,req.body.name,req.body.price,req.body.introT,req.body.amount,id],); 
            console.log(datas);
            console.log(datas2);
            if(datas2.affectedRows === 1){
                output.ok = true;
             }
           res.json(output) ;
        } catch (error) {
            console.log(error)
        }
        
    })
    //刪除
    .delete(async (req,res,next)=>{
        let output = {
            ok:false
        }
        const id = req.params.id;
        const sql = "DELETE FROM exhibition_actadm WHERE id=?";
      
        const[datas] = await db.query(sql,[id]);
        if(datas.affectedRows === 1){
            output.ok = true;
            console.log('output.ok', output.ok)
         }
       res.json(output) ;
    })

module.exports = router;



// {
//   "aName": "測試1",
//   "start": "2022-04-02 13:16:44",
//   "end": "2022-07-14 13:16:44",
//   "intro": "李義弘：回顧展」邀請藝評學者王嘉驥擔任客座策展人，是藝術家長達55年的藝術生涯以來規模最大也最重要的一次展出。李義弘（1941-）早年曾在基隆的國民中學任教，並追隨書畫名家江兆申（1925-1996）",
//   "fkCityId": "2",
//   "fkMuseumId": "1",
//   "fkKindId": "2",
//   "name": "測試票2",
//   "price": "999",
//   "introT": "測試用",
//   "amount": "222"
// }
