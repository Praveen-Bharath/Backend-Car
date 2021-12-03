
const {Register} = require ("../models");
 
var addUserVal = async (req,resp) =>{
    const {name,email,password,phoneNo} = req.body;
   try{
    const values= await Register.create({name,email,password,phoneNo});
      return resp.status(200).json(values);
   }catch(e){
       console.log(e)
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
 
//router.post('/login',
//var checkLogin = async (req, res) => {
   /* const { username, password } = req.body;
 
    // if the username / password is missing, we use status code 400
    // indicating a bad request was made and send back a message
    if (!username || !password) {
      return res.status(400).send(
        'Request missing username or password param'
      );
    }*/
 
   /* try {
      let user = await Register.authenticate(username, password)
 
      Register = await Register.authorize();
 
      return res.json(Register);
 
    } catch (err) {
      return res.status(400).send('invalid username or password');
    }
}*/
 
 
module.exports = {addUserVal,getUser}