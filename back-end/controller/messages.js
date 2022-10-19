const messageModel = require('../models/messages');

exports.createMessage = (req, res, next) => {

    const message = new messageModel({...req.body});
    message.save().then(() => {
      res.status(201).json({
        message: 'Message enregistrée'
      })
    }).catch((error) => {
      res.status(400).json({error})
    })
}

exports.getAllMessage = (req, res, next) => {
    messageModel.find()
    .then(messages => res.status(200).json(messages))
    .catch(error => res.status(400).json({ error }));
}

exports.getOneMessage = (req, res, next) => {
    messageModel.findOne({ _id: req.params.id })
      .then(thing => res.status(200).json(thing))
      .catch(error => res.status(404).json({ error }));
}

exports.updateMessage = (req, res, next) => {
    messageModel.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
      .then(() => res.status(200).json({ message: 'Message modifiée'}))
      .catch(error => res.status(400).json({ error }));
}

exports.deleteMessage = (req, res, next) => {
    messageModel.deleteOne({ _id: req.params.id })
      .then(() => res.status(200).json({ message: 'Message supprimée'}))
      .catch(error => res.status(400).json({ error }));
}