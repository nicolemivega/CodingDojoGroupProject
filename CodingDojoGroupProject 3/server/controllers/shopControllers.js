const ThriftShop = require('../models/ThriftShop');

module.exports = {
    findAll: (req, res) => {
        ThriftShop.find()
            .then( allItems => res.json(allItems))
            .catch( err => res.status(400).json(err));
    },
    findOneItem: (req, res) => {
        ThriftShop.findById(req.params.id)
        .then( oneItem => res.json(oneItem))
        .catch( err => res.status(400).json(err));
    },
    
    createItem: (req, res) => {
        ThriftShop.create(req.body)
        .then( newItem => res.json(newItem))
        .catch( err => res.status(400).json(err));
    },
    updateItem: (req, res) => {
        ThriftShop.findByIdAndUpdate(req.params.id, req.body, {new:true})
            .then( updateItem => res.json(updateItem))
            .catch( err => res.status(400).json(err));
    },

    delete: (req, res) => {
        ThriftShop.findByIdAndDelete(req.params.id)
            .then(deletedItem => res.json(deletedItem))
            .catch( err => res.status(400).json(err));
    }
}