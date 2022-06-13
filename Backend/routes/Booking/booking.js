const { Template } = require('ejs');
var express = require('express');
var router = express.Router();
const multer = require('multer');
const db = require('../../modules/mysql_config');

const upload = multer()



router.route('/coupon/user/:id')

  .get(async(req, res, next)=> {
    const id = req.params.id;
    const sql = "SELECT coupon_id,couponPrice,couponName,fkUserId,couponKind,Date_FORMAT(useDeadline,'%Y-%m-%d') AS useDeadline,isUsed FROM cart_coupon WHERE fkUserId = ? ORDER BY fkUserId DESC;"
    const [datas] = await db.query(sql,[id]);
    res.json(datas);
})
  

router.route('/coupon')

  .get(async(req, res, next)=> {
    const sql = "SELECT coupon_id,couponPrice,couponName,fkUserId,couponKind,Date_FORMAT(useDeadline,'%Y-%m-%d') AS useDeadline,isUsed FROM cart_coupon ORDER BY coupon_id DESC;"
    const [datas] = await db.query(sql);
    res.json(datas);
})
  .put(upload.none(), async(req,res,next)=>{
    let output = {
        ok:false
    }
    const sql = "UPDATE cart_coupon SET isUsed=? WHERE couponName = ?";
    const [datas] = await db.query(sql,[req.body.isUsed,req.body.couponName]);
    if(datas.affectedRows === 1){
        output.ok = true;
    }
    res.json(output) ;
})
    
router.route('/user/:id')

  .get(async(req, res, next)=> {
    const id = req.params.id;
    const sql = "SELECT cartExID,cartExTitle,Date_FORMAT(cartExStart,'%Y-%m-%d') AS cartExStart,Date_Format(cartExEnd,'%Y-%m-%d') AS cartExEnd,cartExImage,Date_Format(cartExBuyTime,'%Y-%m-%d') AS cartExBuyTime,cartExPrice,cartExCount,cartExCategory,user_id,cartExMuseum FROM cart_exhibition  WHERE user_id = ? ORDER BY cartExID DESC;"
    const [datas] = await db.query(sql,[id]);
    res.json(datas);
})

router.route('/')
    .get(async(req, res, next)=> {
        const sql = "SELECT * FROM cart_exhibition ORDER BY cartExID DESC";
        const [datas] = await db.query(sql);
        res.json(datas);
    })
    .post(upload.none(),async (req,res,next)=>{
        try {
            
            const sql = "INSERT INTO cart_exhibition(cartExID,cartExTitle,cartExStart,cartExEnd,cartExImage,cartExBuyTime,cartExPrice,cartExCount,cartExCategory,cartExMuseum,user_id) VALUES ?";       
            // const [datas] = await db.query(sql,[req.body.cartExID,req.body.cartExTitle,req.body.cartExStart,req.body.cartExEnd,req.body.cartExImage,req.body.cartExBuyTime,req.body.cartExPrice,req.body.cartExCount,req.body.cartExCategory]);
    
            console.log(req.body)
            const temp = req.body
            const output = []
            for(let i=0;i<temp.length;i++){
                output.push(
                    [
                        temp[i].cartExID,
                        temp[i].cartExTitle,
                        temp[i].cartExStart,
                        temp[i].cartExEnd,
                        temp[i].cartExImage,
                        temp[i].cartExBuyTime,
                        temp[i].cartExPrice,
                        temp[i].cartExCount,
                        temp[i].cartExCategory,
                        temp[i].cartExMuseum,
                        temp[i].user_id,
                    ]
                )
            }
            const [datas] = await db.query(sql,[output]);        
            res.send('新增資料');
        } catch (error) {
            console.log(error)
        }
    })
router.route('/product')
    .get(async(req, res, next)=> {
        const sql = "SELECT * FROM product_incart ORDER BY id DESC";
        const [datas] = await db.query(sql);
        res.json(datas);
    })
    .post(upload.none(),async (req,res,next)=>{
        try {
            
            const sql = "INSERT INTO product_incart(p_incart_topic, p_incart_img, p_incart_price, p_incart_amount, fk_userId) VALUES(?,?,?,?,?)";       
            // const [datas] = await db.query(sql,[req.body.cartExID,req.body.cartExTitle,req.body.cartExStart,req.body.cartExEnd,req.body.cartExImage,req.body.cartExBuyTime,req.body.cartExPrice,req.body.cartExCount,req.body.cartExCategory]);
    
            console.log(req.body)
            const temp = req.body[0]
            const reponse = await db.query(sql,[temp.product_name,temp.product_img,temp.product_price,temp.amountTotal,temp.userId])
            // console.log(reponse)
            if(reponse.affectedRows===1){

                res.send('新增資料');
            }
            // const output = []
            // for(let i=0;i<temp.length;i++){
            //     output.push(
            //         [
            //             temp[i].id,
            //             temp[i].p_incart_topic,
            //             temp[i].p_incart_img,
            //             temp[i].p_incart_price,
            //             temp[i].p_incart_amount,
            //             temp[i].fk_userId,
            //         ]
            //     )
            // }
            // const [datas] = await db.query(sql,[output]);        
        } catch (error) {
            console.log(error)
        }
    })



module.exports = router;