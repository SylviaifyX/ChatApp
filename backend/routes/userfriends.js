const express = require("express");
const UserFriends = require("../modal/UserFriends")
const router = express.Router();

//new conv

router.post("/", async (req, res) => {
    const newConversation = new UserFriends({
        members: [req.body.senderId, req.body.receiverId],
    });

    try {
        const savedConversation = await newConversation.save();
        res.status(200).json(savedConversation);
    } catch (err) {
        res.status(500).json({err: "failed to fetch connversation"});
    }
});

//get conv of user

router.get("/:userId", async (req, res) => {
    try {
        const conversation = await UserFriends.find({
            members: { $in: [req.params.userId] }
        })
        res.status(200).json(conversation)
    } catch (err) {
        res.status(500).json(err);
    }
})

//get con including two userId

router.get("/find/:firstUserId/:secondUserId", async(req,res) =>{
    try{
        const converstaion = await UserFriends.findOne({
            members: { $all: [req.params.firstUserId, req.params.secondUserId] }, 
        })
    }catch(err){
        res.status(500).json(err);
    }
})

module.exports = router