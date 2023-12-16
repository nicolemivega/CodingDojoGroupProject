const shopControllers = require('../controllers/shopControllers');

module.exports = app => {
    app.get('/api/thriftshop', shopControllers.findAll);
    app.get('/api/thriftshop/:id', shopControllers.findOneItem);
    app.post('/api/thriftshop/new', shopControllers.createItem);
    app.put('/api/thriftshop/:id', shopControllers.updateItem);   
    app.delete("/api/thriftshop/:id", shopControllers.delete);

}