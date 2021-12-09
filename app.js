const express= require("express");
const {sequelize}=require("./models")
const {addUser,displayUser,displayUserbyId,displayPhoneNumberOfUser,displayTotalUsers,sqlQuery} = require("./controls/usercontroller");
const {addTrip,displayUserTrip,addTripRound} = require("./controls/tripcontroller");
const {addUserVal,getUser,loginconnect} = require("./controls/registercontroller");
const app= express();

const cors = require("cors");


app.use(cors({origin:'*'}));
app.use(express.json());


app.post("/users", addUser );
app.get("/users", displayUser);
app.get("/users/:userid", displayUserbyId);
app.get("/users/:userid/phonenumber", displayPhoneNumberOfUser);
//app.get("/users/count", displayTotalUsers);
app.get("/trips", displayUserTrip);
app.post("/trips", addTrip );
app.post("/tripsrounds",addTripRound);
//app.post("/tripsround", addRoundTrip);
//app.post('/login',logincheck);
app.post("/addvalue", addUserVal);
app.get("/getvalue",getUser);
app.post("/login",loginconnect);


const PORT =5001
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