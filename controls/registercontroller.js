
const {Register} = require ("../models");
 
var addUserVal = async (req,resp) =>{
    const {name,email,password,phoneNo} = req.body;
   try{
    const values= await Register.create({name,email,password,phoneNo});
      return resp.status(200).json(values);
   }catch(e){
       console.log(e);
       return resp.status(500).json({"message":e});
   }
}
 
var getUser = async (req,resp) =>{
    try{
        const storedval = await Register.findAll();
        return resp.status(200).json(storedval);
    }
    catch(e){
        console.log(e);
        return resp.status(500).json({"message error": e});
    }
}
 
var loginconnect = async (req,resp) =>{
    const { user_email,password}=req.body;
    try{
        const users=await Register.findOne({where:{email:user_email}});
        return resp.status(200).json(users);
    }catch(e){
        console.log(e)
        return resp.status(500).json({"message":e});
    }
}

 
module.exports = {addUserVal,getUser,loginconnect}