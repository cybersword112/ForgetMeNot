const express = require('express')
const router = express.Router()

const noteController = require('../controllers/noteController')

router.get('/',noteController.getNotes)
router.post('/',noteController.createNote)
router.put('/markNoteIncomplete',noteController.markNoteIncomplete)
router.put('/markNoteComplete',noteController.markNoteComplete)
router.delete('/',noteController.deleteNote)

module.exports = router