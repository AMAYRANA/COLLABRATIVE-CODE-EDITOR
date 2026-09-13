import mongoose from "mongoose";

const roomSchema = new mongoose.Schema({

    roomname:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true

    }
})
const room = mongoose.model("room",roomSchema)

export default room;