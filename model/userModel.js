const mongoose = require("mongoose");
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    bio: {
      type: String,
      default: "Available",
    },
    profilePic: {
      type: String,
    },
    contacts: [
      {
        type: mongoose.Schema.ObjectId,
        ref: User,
      },
    ],
  },
  { timestamps: true }
);
userSchema.pre('save', async function(next){
    if(this.isModified('password')){
        this.password = await bcrypt.hash(this.password, 12)
    }
    next()
})
userSchema.methods.generateAuthToken = async function(){
    try {
        let token = jwt.sign(
        {id:this._is, email:this.email},
        process.env.SECRET,
        {expiresIn:'1d'}
        );
        return token
                
    } catch (error) {
        console.log('Error while gerrating token');        
    }
}


const UserModel = mongoose.model("User", userSchema);
export default UserModel;
