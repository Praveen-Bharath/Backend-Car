const express= require("express")
const {User,Trip, sequelize}=require("./models")
const app= express();

app.use(express.json());

app.get("/users",async(req,resp) => { 
    const users = await User.findAll();
    return resp.status(200).json(users);
});

app.get("/trips",async(req,resp) => { 
    try{
    const trips = await Trip.findAll();
    return resp.status(200).json(trips);
    }catch(e){
        return resp.status(500).json({"message":e});
    }
});

app.post("/users",async(req,resp) => { 
    const {CarId,name,age,mailId,phoneNumber} = req.body;
    try{
    const users = await User.create({CarId,name,age,mailId,phoneNumber});
    return resp.status(200).json(users);
    }catch(e){
        return resp.status(500).json({"message": e});
    }
});

app.post("/trips",async(req,resp) => { 
    const {CarId,From_location,To_location,Date} = req.body;
    try{
    const trips = await Trip.create({CarId,From_location,To_location,Date});
    return resp.status(300).json(trips);
    }catch(e){
        return resp.status(600).json({"message from db": e});
    }
});

const PORT =5000
app.listen({port:PORT},async()=>{
    console.log(`Server started at ${PORT}`)
    try{
        await sequelize.sync({force: true});
    }catch(e){
        console.log(e);
    }
})