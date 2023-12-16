// const UserRegistration = require('../models/UserRegistration');

// module.exports = {
//     register: (req, res) => {
//         UserRegistration.create(req.body)
//         .then( user => res.json({msg: "Success", user: user}))
//         .catch (err => res.status(400).json(err))
//     },
//     findAll: (req, res) => {
//         UserRegistration.find()
//             .then( allUsers => res.json(allUsers))
//             .catch( err => res.status(400).json(err));
//     },
//     findOneUser: (req, res) => {
//         UserRegistration.findById(req.params.id)
//         .then( oneUser => res.json(oneUser))
//         .catch( err => res.status(400).json(err))
//     },
    
//     createUser: (req, res) => {
//         UserRegistration.create(req.body)
//         .then( newUser => res.json(newUser))
//         .catch( err => res.status(400).json(err));
//     },
//     updateUser: (req, res) => {
//         UserRegistration.findByIdAndUpdate(req.params.id, req.body, {new:true})
//             .then( updateUser => res.json(updateUser))
//             .catch( err => res.status(400).json(err));
//     },

//     delete: (req, res) => {
//         UserRegistration.findByIdAndDelete(req.params.id)
//             .then(deletedUser => res.json(deletedUser))
//             .catch( err => res.status(400).json(err));
//     }
// }