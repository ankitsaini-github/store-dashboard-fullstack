const path = require('path');

const express = require('express');

const adminController = require('../controllers/admin');

const router = express.Router();

router.get('/items', adminController.getItems);

router.post('/add-item', adminController.postItem);

router.post('/sold', adminController.soldItem);

module.exports = router;