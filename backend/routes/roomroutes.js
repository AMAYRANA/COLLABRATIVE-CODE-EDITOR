import express, { Router } from "express";
import room from '../models/room.js';
import rmap from '../rmap.js'

const routes = express.Router();

routes.post('/signup',async (req,res)=>{
    console.log("body recived",req.body)
const{roomname,password} = (req.body);

 const existingRoom = await room.findOne({
        roomname: roomname
    });
if(existingRoom){
 return res.status(400).json({
    message:"User already exists",
 })
}


const roomdetails = await room.create({
    roomname:roomname,
    password:password
});
rmap.set(roomdetails._id.toString(),new Set())
res.json(roomdetails);
}    
)

//login details

routes.post('/login', async (req,res)=>{
    
 const {roomname,password} = (req.body);
    const user = await room.findOne({
        roomname:roomname
    })
if(!user){
   return res.status(401).json({
        message:"room does not exist"
    })
    
}
 else if(user.password !== password){
  return res.status(401).json({
        message:"INVALID PASSWORD"
    })
}

else if(user.password === password){
    res.status(200).json({
        message:"LOGIN SUCCESFULL",
        roomid: user._id
    })

}

})





export default routes;