const mongoose = require("mongoose");


const userSchema = mongoose.Schema(
  {
    firstName: {
      type: String,
    },
    lastName: {
      type: String,
    },
    image: {
      type: String,
      default: ""
    },
    email: {
      type: String,
    },
    phone: {
      type: String,
    },
    university:{
      type: String
    },
    points: {
      type: Number,
    },
    password: {
      type: String,
    },
    profileImg: {
      type: String,
    },
    bio: {
      type: String,
    },
    socialMediaAccounts: {
      type: Object,
      default: {},
    },
    isEditor: {
        type: Boolean,
        default: false
    },
    isAdmin: {
        type: Boolean,
        default: false
    }
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
