const {createRoom,updateRoom,deleteRoom,getDetailRoom,getAllRoom}=require('../controllers/room.js')
const express=require('express')
const {verifyAdmin}=require('../middleware/verify.js')

const router=express.Router();

router.get('/getAllRoom',getAllRoom)
router.get('getDetailRoom/:id',getDetailRoom)
router.put('updateRoom/:id',verifyAdmin,updateRoom)
router.post('createRoom/:id/:hotelid',verifyAdmin,createRoom)
router.delete('deleteRoom/:id/:hotelid',verifyAdmin,deleteRoom)

module.exports=router