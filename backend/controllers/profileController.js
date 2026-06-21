import mongoose from "mongoose";
import User from "../models/userModel";

const getUserId = async (req, res) => {
  
  const id = req.params.id;

  try{
    const user = await User.findById(id).select("-password");
    if(!user){
      return res.status(404).json({message: "user not found"});
    }
    res.status(200).json({message: "found the user!!", user});
    
  }
  catch(error){
    console.error("Having an error: ", error);
    res.status(500).json({message: "server error"});
  }
}