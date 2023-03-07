const router = require('express').Router();
const QuizzController = require('../controllers/QuizzController')

router.post('/createQuizz', QuizzController.createQuizz)
router.put('/updateQuizz/:id', QuizzController.updateQuizz)

module.exports = router;