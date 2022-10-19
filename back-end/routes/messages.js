const express = require('express');
const { getOneMessage, createMessage, updateMessage, deleteMessage, getAllMessage } = require('../controller/messages');
const router = express.Router();
const messageModel = require('../models/messages');

router.post('/', createMessage);  
router.get('/', getAllMessage);
router.get('/:id', getOneMessage);
router.put('/:id', updateMessage);  
router.delete('/:id', deleteMessage);

module.exports = router;