const {updateUser,deleteUser,detailUser,allUser}=require('../controllers/user.js')

const router=express.Router();

router.get('/allUser',allUser)
router.get('/detailUser/:id',detailUser)
router.delete('/deleteUser/:id',deleteUser)
router.put('/updateUser/:id',updateUser)

module.exports=router