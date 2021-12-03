const express= require("express");
const {sequelize}=require("./models")
const {addUser,displayUser,displayUserbyId,displayPhoneNumberOfUser,displayTotalUsers,sqlQuery} = require("./controls/usercontroller");
const {addTrip,displayUserTrip} = require("./controls/tripcontroller");
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

const PORT =5000
app.listen({port:PORT},async()=>{
    console.log(`Server started at ${PORT}`)
    try{
        await sequelize.authenticate();
        await sequelize.sync({force:true});
        console.log("Connected");
    }catch(e){
        console.log(e);
    }
})