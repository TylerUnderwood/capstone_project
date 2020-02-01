INSERT INTO characters
	(
		name,
		level,
		race,
		class,
		strength,
		dexterity,
		constitution,
		intelligence,
		wisdom,
		charisma
	)
VALUES
	(
		'Krunk',
		1,
		'Orc',
		'Bard',
		17,
		8,
		16,
		8,
		8,
		15
	)
;

SELECT * FROM characters ORDER BY id;

-- DROP TABLE characters