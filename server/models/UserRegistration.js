// const mongoose = require('mongoose');
// const bcrypt = require('bcrypt');

// const UserRegistrationSchema = new mongoose.Schema({
//     firstName: {
//         type: String,
//         required: [true, "User must provide first name"],
//     },
    
//     lastName:{
//         type: String,
//         required: [true, "User must provide last name"],
//     },

//     email:{
//         type: String,
//         required: [true, "Email is required"],
//         validate: {
//             validator: val => /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val),
//             message: "Please enter valid email address"
//         }
//     },

//     address:{
//         type: Number,
//         required: [true, "Address is required"],
//     },

//     city:{
//         type: Boolean,
//         required: [true, "City must be selected"],
//     },
    
//     state:{
//         type: Number,
//         required: [true, "State is required"],
//     },

//     password:{
//         type: Number,
//         required: [true, "password is required"],
//         minlength: [8, "Password must be atleast 8 characters long."],

//     },
    
    
//     confirmPassword:{
//         type: Number,
//         required: [true, "comfirmation is required"],

//     },

// }, {timestamps: true}) 

// UserRegistrationSchema.virtual("comfirmPassword")
//     .get( () => this._confirmPassword)
//     .set( value => this._confirmPassword = value);

//     UserRegistrationSchema.pre('validate', function(next) {
//         if(this.password!== this._confirmPassword) {
//             this.invalidate('confirmPassword', "Passwords must match!")
//         }
//         next();
//     });

//     UserRegistrationSchema.pre('save', function(next) {
//         bcrypt.hash(this.password, 10)
//             .then( hash => {
//                 this.password = hash;
//                 next();
//             });
//     });


// module.exports = mongoose.model("UserRegistration", UserRegistrationSchema)