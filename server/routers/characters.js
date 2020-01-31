const express = require('express')
const charactersController = require('../controllers/characters')
const router = express.Router()

router.get('/', charactersController.getAllcharacters)

router.get('/:id', charactersController.getCharacterById)

router.post('/', charactersController.createCharacter)

router.put('/:id', charactersController.updateCharacterById)

router.delete('/:character_name', charactersController.deleteCharacterByCharacterName)

module.exports = router