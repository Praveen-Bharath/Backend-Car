const express= require("express");
const {sequelize}=require("./models")
const {addUser,displayUser,displayUserbyId,displayPhoneNumberOfUser,displayTotalUsers,sqlQuery} = require("./controls/usercontroller");
const {addTrip,displayUserTrip} = require("./controls/tripcontroller");
const app= express();

const cors = require("cors");

app.use(cors({origin:'*'}));
app.use(express.json());
/*
app.get("/users",async(req,res) => { 
    const users = await User.findAll();
    return res.status(200).json(users);
});

app.get("/trips",async(req,res) => { 
    try{
        
    const trips = await Trip.findAll();
    res.send(trips)
    res.status(200).json(trips);
    
    }
    catch(e){
        res.status(500).json({"message":e});
    }
});

app.post("/users",async(req,res) => { 
    const {CarId,name,age,mailId,phoneNumber} = req.body;
    try{
    const users = await User.create({CarId,name,age,mailId,phoneNumber});
    return res.status(200).json(users);
    }catch(e){
        return res.status(500).json({"message": e});
    }
});

app.post("/trips",async(req,res) => { 
    const {CarId,From_location,To_location,Date} = req.body;
    try{
    const trips = await Trip.create({CarId,From_location,To_location,Date});
    return res.status(300).json(trips);
    }catch(e){
        return res.status(600).json({"message from db": e});
    }
});
*/

app.post("/users", addUser );
app.get("/users", displayUser);
app.get("/users/:userid", displayUserbyId);
app.get("/users/:userid/phonenumber", displayPhoneNumberOfUser);
//app.get("/users/count", displayTotalUsers);
app.get("/getting", displayUserTrip);
app.post("/putting", addTrip );

const PORT =5002
app.listen({port:PORT},async()=>{
    console.log(`Server started at ${PORT}`)
    try{
        await sequelize.authenticate();
        await sequelize.sync({force:false});
        console.log("Connected");
    }catch(e){
        console.log(e);
    }
})