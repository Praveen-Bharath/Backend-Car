const {Trip, Sequelize} = require ("../models");
const {Op, QueryTypes} = require("sequelize");
const db = require("../models");

var addTrip = async (req,resp) =>{
    const {CarId,From_location,To_location,Date} = req.body;
    try{
    const addingtrip = await Trip.create({CarId,From_location,To_location,Date});
    return resp.status(300).json(addingtrip);
    }catch(e){
        return resp.status(600).json({"message from db": e});
    }
}

var displayUserTrip = async (req,resp) =>{
    try{
        const world = await Trip.findAll();
        return resp.status(200).json(world);
    }
    catch(e){
        return resp.status(500).json({"message": e});
    }
}

module.exports = {addTrip,displayUserTrip}