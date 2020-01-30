INSERT INTO characters
	(
		character_id,
		character_name,
		character_level,
		character_race,
		character_class,
		character_strength,
		character_dexterity,
		character_constitution,
		character_intelligence,
		character_wisdom,
		character_charisma
	)
VALUES
	(
		NULL,
		'Krunk',
		1,
		'Orc'
		'Bard',
		17,
		8,
		16,
		8,
		8,
		15
	)
;

SELECT * FROM characters ORDER BY character_id;

-- DROP TABLE characters