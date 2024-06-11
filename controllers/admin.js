const Items = require('../models/items');

// get all items
exports.getItems = (req, res, next) => {
  Items.findAll().then(result => {
    // console.log('ALL ITEMS ======= ',result)
    res.send(result);
  }).catch(err => console.log(err));
};

// add item
exports.postItem = (req, res, next) => {
  const name = req.body.name;
  const description = req.body.description;
  const price = req.body.price;
  const quantity = req.body.quantity;
  Items.create({
    name: name,
    description: description,
    price: price,
    quantity: quantity,
  }).then(result => {
    console.log(result);
    res.send(result);
  }).catch(err => console.log(err))
};

// sold item
exports.soldItem = (req, res, next) =>{
  const id = req.body.id;
  Items.findOne({ where: { id: id } }).then(item => {
    if(item.quantity-req.body.sold<=0)
      throw new Error('items unavailable')
    item.quantity = item.quantity-req.body.sold;
    return item.save();
  }).then((result)=>{
    res.send(result);
  }).catch(err => console.log(err))

}