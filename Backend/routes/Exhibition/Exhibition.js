var express = require('express')
var router = express.Router()
const db = require('../../modules/mysql_config')
const multer = require('multer');
const upload = multer()



router.route('/location')
  .get(async (req, res, next) =>{
    const id = req.params.id;
    const sql = `SELECT direction,did,GROUP_CONCAT(city) as city
    FROM exhibition_city
    JOIN exhibition_direction
    ON exhibition_city.direction_id = exhibition_direction.did
    GROUP BY did
    `
    const [datas] = await db.query(sql);
    res.json(datas);
  })
router.route('/direction')
  .get(async (req, res, next) =>{
    const id = req.params.id;
    const sql = "SELECT * FROM exhibition_direction"
    const [datas] = await db.query(sql);
    res.json(datas);
  })
router.route('/galleries')
  .get(async (req, res, next) =>{
    const id = req.params.id;
    const sql = "SELECT * FROM exhibition_museum"
    const [datas] = await db.query(sql);
    res.json(datas);
  })
router.route('/categories')
  .get(async (req, res, next) =>{
    const id = req.params.id;
    const sql = "SELECT * FROM exhibition_kind"
    const [datas] = await db.query(sql);
    res.json(datas);
  })

router.route('/:id')
  .get(async (req, res, next) =>{
    const id = req.params.id;
   
    const sql = `
    SELECT 
    id, aName, pic1, pic2, start, end, intro, mName, city, kind, fkActId, GROUP_CONCAT(name) as TicketName, GROUP_CONCAT(price) as TicketPrice
    FROM exhibition_actadm
    JOIN exhibition_museum
    on exhibition_actadm.fkMuseumId = exhibition_museum.mid
    JOIN exhibition_city
    on exhibition_actadm.fkCityId = exhibition_city.cid
    JOIN exhibition_kind 
    ON exhibition_actadm.fkKindId = exhibition_kind.kid
    JOIN exhibitionticket
    ON exhibition_actadm.id = exhibitionticket.fkActId
    JOIN exhibition_ticket
    ON exhibitionticket.fkTicketId = exhibition_ticket.tid
    WHERE id = ?
	  GROUP BY fkActId
    `
    const [datas] = await db.query(sql,[id]);
    console.log(datas)
    res.json(datas);
  })

router.route('/')
  .get(async (req, res, next) =>{
    const sql = `SELECT 
    id, aName, pic1, pic2, start, end, intro, mName, city, kind, fkActId, GROUP_CONCAT(name) as TicketName, GROUP_CONCAT(price) as TicketPrice
    FROM exhibition_actadm
    JOIN exhibition_museum
    on exhibition_actadm.fkMuseumId = exhibition_museum.mid
    JOIN exhibition_city
    on exhibition_actadm.fkCityId = exhibition_city.cid
    JOIN exhibition_kind 
    ON exhibition_actadm.fkKindId = exhibition_kind.kid
    JOIN exhibitionticket
    ON exhibition_actadm.id = exhibitionticket.fkActId
    JOIN exhibition_ticket
    ON exhibitionticket.fkTicketId = exhibition_ticket.tid
	  GROUP BY fkActId 
    ORDER BY id DESC;
    `
    const [datas] = await db.query(sql);
    res.json(datas);
  })




module.exports = router