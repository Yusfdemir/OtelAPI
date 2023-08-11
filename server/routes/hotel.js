const {createHotel,updateHotel,deleteHotel,getSingleHotel,getAllHotel,typeByCount,typeByCity}=require('../controllers/hotel.js');
const express=require('express');
const {verifyAdmin}=require('../middleware/verify.js')

const router=express.Router();

router.get('/typeByCity',typeByCity)
router.get('/typeByCount',typeByCount)
router.post('/createHotel',verifyAdmin,createHotel)
router.put('/updateHotel/:id',verifyAdmin,updateHotel)
router.delete('/deletedHotel/:id',verifyAdmin,deleteHotel)
router.get('getSingleHotel/:id',getSingleHotel)
router.get('/getAllHotel',getAllHotel)


module.exports=router