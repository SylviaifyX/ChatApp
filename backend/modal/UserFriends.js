const { default: mongoose } = require("mongoose")

const UserFriendsSchema = new mongoose.Schema(
    {
        members:{
            type: Array,
        },
        
    },
    {timestamps: true}
)

module.exports = mongoose.model("userfriends",UserFriendsSchema)