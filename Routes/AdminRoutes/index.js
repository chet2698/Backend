const express = require('express');
const app = express();
const User = require('../../Models/User');

const router = express.Router();

router.post('/register-admin', async (req, res) => {
const{name,email,password,role} = req.body;
try{
    const existingAdmin = await User.findOne({role:'admin'});
    if(existingAdmin){
        return res.status(400).json({message:"Admin already exists"});
    }
    const newAdmin = new User({name,email,password,role:'admin'});
    await newAdmin.save();
    res.status(201).json({message:"Admin registered successfully"});
 }catch (error) {
    res.status(500).json({message:"Internal server error"});
 }  
});


router.post('/login-admin', async (req, res) => {
    const {email,password} = req.body;
    try{
        const admin = await User.findOne({email,role:'admin'});
        if(!admin){
            return res.status(400).json({message:"Invalid admin credentials"});
        }   
        if(admin.password !== password){
            return res.status(400).json({message:"Invalid admin credentials"});
        }
        res.status(200).json({message:"Admin logged in successfully"});
    } catch (error) {
        res.status(500).json({message:"Internal server error"});
    }
});

module.exports = router;