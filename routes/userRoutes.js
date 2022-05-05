const router = require('express').Router();
const User = require("../models/User")
const bcrypt = require("bcrypt")

//update user 
router.put("/:id", async (req,res)=>{
    if(req.body.userId===req.params.id || req.body.isAdmin){
        if(req.body.password){
            try{
                const salt = await bcrypt.genSalt()
                req.body.password = await bcrypt.hash(req.body.password, salt)
            }catch(err){
                return res.status(500).json(err)
            }
        }
        try {
            const user = await User.findByIdAndUpdate(req.params.id,{
                $set: req.body,
            })
            res.status(201).json("account has been updated")
            
        } catch (error) {
            return res.status(500).json(error)
        }
    }else{
        return res.status(403).json("you can only update your account")
    }
})
//delete user
router.delete("/:id", async (req,res)=>{
    if(req.body.userId===req.params.id || req.body.isAdmin){
        try {
            const user = await User.findByIdAndDelete(req.params.id)
            res.status(201).json("account has been deleted")
            
        } catch (error) {
            return res.status(500).json(error)
        }
    }else{
        return res.status(403).json("you can only delete your account")
    }
})
//get a user 
router.get("/:id", async (req, res) => {
    try{
        const user = await User.findById(req.params.id)
        const {password, updatedAt, ...others} = user._doc
        res.status(200).json(others)
    }catch(err){
        res.status(404).json(err)
    }
})
//follow a user

//unfollow a user
module.exports = router