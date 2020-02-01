CREATE TABLE characters
	(
		id INT(7) NOT NULL AUTO_INCREMENT,
		name VARCHAR(50),
		level VARCHAR(50),
		race VARCHAR(50),
		class VARCHAR(50),
		strength VARCHAR(50),
		dexterity VARCHAR(50),
		constitution VARCHAR(50),
		intelligence VARCHAR(50),
		wisdom VARCHAR(50),
		charisma VARCHAR(50),
        PRIMARY KEY (id)
    )
;

ALTER TABLE characters AUTO_INCREMENT = 1000001;