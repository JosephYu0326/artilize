var express = require('express');
var router = express.Router();
const db = require('../../modules/mysql_config');

// router.get('/', function (req, res, next) {
//     res.send('PRODUCT');
// });

router.get('/',async(req,res,next)=>{
    console.log(req);
    const sql = "SELECT * FROM product_main"
    const [datas] = await db.query(sql)
    res.json(datas)
    // console.log(datas)
})
router.get('/brand',async(req,res,next)=>{
    console.log(req);
    const sql = "SELECT * FROM product_brand"
    const [datas] = await db.query(sql)
    res.json(datas)
    // console.log(datas)
})

router.get('/introduce/carousel/:id',async(req,res)=>{
    const id = req.params.id
    const sql = "SELECT ImgName FROM product_main RIGHT JOIN product_introimages ON product_main.product_id = product_introimages.fkProductId WHERE product_id=?"
    const [datas] = await db.query(sql,[id])
    res.json(datas)
    console.log(datas)
})

router.get('/introduce/likeicon',async(req,res)=>{
    const{userId,productId} = req.query
    console.log(userId,productId)
        const sql = "SELECT count(*) as totallike FROM product_like WHERE fkUserId=? and fkProductId=?"
        const [liketotaldatas] = await db.query(sql,[userId,productId])
        const totaldatas = liketotaldatas[0].totallike
        console.log(totaldatas)
        res.json(totaldatas)

})

router.get('/introduce/like',async(req,res)=>{
    let output ={
        ok:false
    }
    const{userId,productId} = req.query   
        console.log(userId);
        console.log(productId);
        const sql = "SELECT count(*) as totallike FROM product_like WHERE fkUserId=? and fkProductId=?"
        const [liketotaldatas] = await db.query(sql,[userId,productId])
        const totaldatas = liketotaldatas[0].totallike

        console.log(liketotaldatas);
        console.log(totaldatas);

        if(totaldatas >= 1){
            const sqlDelete = "DELETE FROM product_like WHERE fkUserID=? and fkProductId=? "
           const [deletedatas] = await db.query(sqlDelete,[userId,productId])
           if(deletedatas.affectRows ===1){
               output.ok = true
           }
           res.json(output)
        }else{
            const sqlInsert = "INSERT INTO product_like(fkUserId,fkProductId) VALUES (?,?) "
            const [datas] = await db.query(sqlInsert,[userId,productId])
            console.log(datas);
            if(datas.affectedRows ===1){
                output.ok = true;
            }
            res.json(output);
            // res.json(datas)
            // console.log(datas)
        }
        
        
        
        // res.json(output)
    })




router.route('/introduce/:id')
    .get(async(req,res,next)=>{
        const id = req.params.id
        // console.log(id);
        // const getId = url.parse(req.url).query
        // console.log(getId)
        // res.json(1)
        const sql = "SELECT * FROM product_main WHERE product_id=?"
        const [datas] = await db.query(sql,[id])
        res.json(datas)
        console.log(datas)
    })
    



router.get('/category/:categoryDetail', async(req,res,next)=>{
    const categoryDetail = req.params.categoryDetail
    // console.log(categoryDetail);
    // const getId = url.parse(req.url).query
    // console.log(getId)
    // res.json(1)
    const sql = "SELECT * FROM product_main WHERE product_category_detail=?"
    const [datas] = await db.query(sql,[categoryDetail])
    res.json(datas)
    // console.log(datas)
})

// .get(async(req,res,next)=>{
//     const brandSql = "SELECT * FROM product_brand"
//     const [brandDatas] = await  db.query(brandSql)
//     res.json(brandDatas)
//     console.log(brandDatas)
// })

// router.get('/',function(req,res,next){
//     db.query(
//         'SELECT * FROM product_main order by product_name',function(err,results,fields){
//             res.json(results)
//             console.log(results)
//         }
//     )
// })



module.exports = router;