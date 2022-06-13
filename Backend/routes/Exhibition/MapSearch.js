var express = require('express');
var router = express.Router();
const db = require('../../modules/mysql_config');

router.get('/', async function (req, res, next) {
    const sql = `SELECT exhibition_actadm.id,aName,pic1,date_format(start,"%Y-%m-%d") as start ,date_format(end,"%Y-%m-%d") as end,direction,city,mName,CONVERT((longitude+rand()*0.0001),DECIMAL(10,7)) as longitude,CONVERT((latitude+rand()*0.0001),DECIMAL(10,7)) as latitude from exhibition_actadm left JOIN exhibition_city on cid = fkCityId JOIN exhibition_museum ON mid = fkMuseumId JOIN exhibition_kind on kid = fkKindId JOIN exhibition_direction on exhibition_direction.did = exhibition_city.direction_id;`
    const [datas] = await db.query(sql);
    res.json(datas);
    console.log(datas)
});
// router.get('/ability', async function (req, res, next) {
//     const sql = `SELECT * from ability`
//     const [datas] = await db.query(sql);
//     res.json(datas);
//     console.log(datas)
// });



module.exports = router;
