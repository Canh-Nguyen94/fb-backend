const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const PostSchema = new mongoose.Schema(
  {
    userId:{
        type: String,
        required: true,
    },
    desc: {
        type: String,
        max: 500
    }, 
    img:{
        type: String,
    },
    likes: {
        type:Array, 
        default: []
    }
  },
  { timestamps: true }
);


const Post = mongoose.model("post", PostSchema);

module.exports = Post;
