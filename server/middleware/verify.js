const jwt=require('jsonwebtoken')

const verifyToken=(req,res,next)=>{
    const token=req.cookies.token;
    if(!token){
        res.status(500).json({message:"Sisteme Login olmadınız"})
    }
    jwt.verify(token,"SECRET_KEY",(error,user)=>{
        if(error) res.status(500).json({message:"Token Geçersiz !!!"})
        req.user=user;
        next();
    })

}

const verifyUser=(req,res,next)=>{
    verifyToken(req,res,next,()=>{
        if(req.user.id == req.params.id || req.user.isAdmin){
            next()
        }
        else{
            res.status(500).json({message:"Sisteme Login olmadınız"})
        }
    })

}

const verifyAdmin=(req,res,next)=>{
    verifyToken(req,res,next,()=>{
        if(req.user.isAdmin){
            next()
        }
        else{
            res.status(500).json({message:"Admin değilsiniz"})
        }
    })
}

module.exports={verifyToken,verifyAdmin,verifyUser}