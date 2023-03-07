const QuizzModel = require('../models/QuizzModel');


exports.createQuizz = async (req, res) => {
    await QuizzModel.create({ name:req.body.name }).then(response => res.send('bien créer')).catch(err => res.send('erreur'))
}

exports.updateQuizz = async (req, res) => {
    await QuizzModel.update({ name:req.body.name }, { where: { id:req.params.id } } ).then(response => res.send('bien update')).catch(err => res.send('erreur'))
}