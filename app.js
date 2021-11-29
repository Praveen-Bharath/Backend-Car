const express= require("express")
const {Sequelize,User, sequelize}=require("./models")
const app= express();

app.use(express.json());

app.get("/users",async(req,resp) => { 
    const users = await User.findAll();
    return resp.status(200).json(users);
});

app.post("/users",async(req,resp) => { 
    const {name,age,mailId,phoneNumber} = req.body;
    try{
    const users = await User.create({name,age,mailId,phoneNumber});
    return resp.status(200).json(users);
    }catch(e){
        return resp.status(500).json({"message": e});
    }
});

const PORT =5000
app.listen({port:PORT},async()=>{
    console.log(`Server started at ${PORT}`)
    try{
        await sequelize.sync({force: false});
    }catch(e){
        console.log(e);
    }
})