const mysql = require('mysql')
const pool = require('../sql/connection')
const { handleSQLError } = require('../sql/error')

const getAllCharacters = (req, res) => {
	pool.query("SELECT * FROM characters", (err, rows) => {
		if (err) return handleSQLError(res, err)
		return res.json(rows);
	})
}

const getCharacterById = (req, res) => {
	let sql = "SELECT * FROM characters WHERE id = ?"
	sql = mysql.format(sql, [ req.params.id ])

	pool.query(sql, (err, rows) => {
		if (err) return handleSQLError(res, err)
		return res.json(rows);
	})
}

const createCharacter = (req, res) => {
	const { 
		name,
		level,
		race,
		strength,
		dexterity,
		constitution,
		intelligence,
		wisdom,
		charisma,
	} = req.body
	let sql = "INSERT INTO characters (name, level, race, class, strength, dexterity, constitution, intelligence, wisdom, charisma) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)"
	sql = mysql.format(sql, [ 
		name,
		level,
		race,
		req.body.class,
		strength,
		dexterity,
		constitution,
		intelligence,
		wisdom,
		charisma,
	])

	pool.query(sql, (err, results) => {
		if (err) return handleSQLError(res, err)
		return res.json({ newId: results.insertId });
	})
}

const updateCharacterById = (req, res) => {
	const { firstName, lastName } = req.body
	let sql = "UPDATE characters SET first_name = ?, last_name = ? WHERE id = ?"
	sql = mysql.format(sql, [ firstName, lastName, req.params.id ])

	pool.query(sql, (err, results) => {
		if (err) return handleSQLError(res, err)
		return res.status(204).json();
	})
}

const deleteCharacterByName = (req, res) => {
	let sql = "DELETE FROM characters WHERE first_name = ?"
	sql = mysql.format(sql, [ req.params.first_name ])

	pool.query(sql, (err, results) => {
		if (err) return handleSQLError(res, err)
		return res.json({ message: `Deleted ${results.affectedRows} character(s)` });
	})
}

module.exports = {
	getAllCharacters,
	getCharacterById,
	createCharacter,
	updateCharacterById,
	deleteCharacterByName
}