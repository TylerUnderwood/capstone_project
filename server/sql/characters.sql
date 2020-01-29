CREATE TABLE characters
	(
		character_id INT(7) NOT NULL AUTO_INCREMENT,
		character_name VARCHAR(50),
		character_level VARCHAR(50),
		character_race VARCHAR(50),
		character_class VARCHAR(50),
		character_strength VARCHAR(50),
		character_dexterity VARCHAR(50),
		character_constitution VARCHAR(50),
		character_intelligence VARCHAR(50),
		character_wisdom VARCHAR(50),
		character_charisma VARCHAR(50),
        PRIMARY KEY (character_id)
    )
;

ALTER TABLE characters AUTO_INCREMENT = 1000001;