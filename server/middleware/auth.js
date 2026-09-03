// we will get the userid from the jwt
import jwt from "jsonwebtoken";

export const userAuth=async(req,res,next)=>{ //next here is used to move to controller after the middleware is successfully executed
    const {token}=req.headers
    if(!token){
        return res.json({success:false,message:'Not Authorized.Login again!!'})
    }
    try {
        const tokenDecode=jwt.verify(token,process.env.JWT_SECRET)
        if(tokenDecode){
            req.body.userId=tokenDecode.id
        }
        else{
            return res.json({success:false,message:'Not authorized.Login agian!!'})
        }
        next()
    } catch (error) {
        res.json({success:false,message:error.message})
    }

}