const express = require('express')
const charactersController = require('../controllers/characters')
const router = express.Router()

router.get('/', charactersController.getAllCharacters)

router.get('/:id', charactersController.getCharacterById)

router.post('/', charactersController.createCharacter)

router.put('/:id', charactersController.updateCharacterById)

router.delete('/:character_name', charactersController.deleteCharacterByName)

module.exports = router