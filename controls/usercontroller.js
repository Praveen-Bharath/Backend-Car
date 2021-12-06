const {User,Trip,Sequelize} = require("../models")
const {Op, QueryTypes} = require("sequelize");
const db = require("../models");
const user = require("../models/user");


//function to add new user
var addUser = async(req,resp) =>{
const {name,age,mailId,phoneNumber} = req.body;
    try{
    const users = await User.create({name,age,mailId,phoneNumber});
    return resp.status(200).json(users);
    }catch(e){
        return resp.status(500).json({"message": e});
    }
}

//funtion to display all the user's id
var displayUser = async(req,resp) =>{
    try{
    const users = await User.findAll(
        {where: {mailId:{[Op.like]:'%@gmail.com'}},/*attributes: ["userId"],*/
    order: [["age","ASC"],["name", "DESC"]],});
    return resp.status(200).json(users);
    }
    catch(e){
        return resp.status(500).json({"message": e});
    }
}

/*var logincheck =async(req,resp) =>{

        
        const users = await praveen.find(user => user.email = req.body.email);
        if(users){
            if(user.password== req.body.password)
            {
                return resp.status(200).json({"message":"hi praveen"})
            }
            else{
                return resp.status(201).json({"message":"OLUNGA PASSWORD PODRA"})

            }
            
        }
        else{
            return resp.status(202).json({"message":"YARA NEE"})

        }
     
       
    }*/

//function to display user details using user Id
var displayUserbyId =  async (req, resp)=> {
    const userid = req.params.userid;
    try{
        const user = await User.findOne({where: {userId: userid}});
        return resp.status(200).json(user);
    }catch(e){
        return resp.status(500).json({"message": e});
    }
}



var displayPhoneNumberOfUser = async (req, resp)=> {
    const userid = req.params.userid;
    //const phnNo = req.params.phnNo;
    try{
        const phoneNumber = await User.findOne({where: {userId : userid}, attributes: ["phoneNumber"]});
        return resp.status(200).json(phoneNumber);
    }catch(e){
        return resp.status(500).json({"message": e});
    }
}



var displayTotalUsers = async (req, resp) => {
    try{
    const users = await User.findAll({attributes: [[Sequelize.fn("Count",Sequelize.col("userId")),"totalCount"]]});
    return resp.status(200).json(users);
    }catch(e){
        return resp.status(500).json({"message": e});
    }
}

var sqlQuery = async (req, resp) => {
    try{
    const users = await db.sequelize.query("select * from userinfo where age > $age", 
    {type: QueryTypes.SELECT,
    model: User,
    bind: {"age": 20}
    });
    return resp.status(200).json(users);
    }catch(e){
        return resp.status(500).json({"message": e});
    }
}

module.exports = {addUser,displayUser,displayUserbyId,displayPhoneNumberOfUser,displayTotalUsers,sqlQuery}