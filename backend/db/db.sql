drop database plt;

create database plt;

use plt;

CREATE TABLE users (
    id              SERIAL PRIMARY KEY,
    username        VARCHAR(100) NOT NULL,
    mail            VARCHAR(150) UNIQUE NOT NULL, 
    password_key    VARCHAR(255) NOT NULL,
    weight_kg       NUMERIC(5,2) CHECK (peso_kg > 0), 
    date_created    TIMESTAMP DEFAULT CURRENT_TIMESTAMP 
);

INSERT INTO users (username, mail, password_key, weight_kg)
VALUES 
('Braulio', 'braulio@gmail.com', 'braulio26', 72),
('Roberto', 'roberto@gmail.com', 'roberto_papuchos', 75);

CREATE TABLE routines (
    id              SERIAL PRIMARY KEY,
    username_id     INTEGER NOT NULL,
    date_current    DATE NOT NULL DEFAULT CURRENT_DATE,
	total_load      NUMERIC(12,2) NOT NULL DEFAULT 0 CHECK (total_load >= 0),

    CONSTRAINT fk_user
        FOREIGN KEY (username_id)
        REFERENCES users(id)
        ON DELETE CASCADE
);

INSERT INTO routines (username_id, date_current)
VALUES
(1, '2026-02-18'),
(2, '2026-02-20');

CREATE TABLE exercises (
    id              SERIAL PRIMARY KEY,
    routines_id     INTEGER NOT NULL,
    names           VARCHAR(100) NOT NULL,
    focus           VARCHAR(50) CHECK (focus IN ('Pull', 'Push', 'Core', 'Legs')),
    extra_weight    INTEGER NOT NULL DEFAULT 0 CHECK (extra_weight >= 0),
    reps            INTEGER NOT NULL DEFAULT 0 CHECK (reps >= 0),

    CONSTRAINT fk_routine
        FOREIGN KEY (routines_id)
        REFERENCES routines(id)
        ON DELETE CASCADE
);

INSERT INTO exercises (routines_id, names, focus, extra_weight, reps)
VALUES
-- Rutina 1 (Braulio)
(1, 'Pull ups', 'Pull', 10, 0),
(1, 'Pull ups', 'Pull', 10, 0),
(1, 'Pull ups', 'Pull', 10, 0),
(1, 'Dips', 'Push', 12, 0),
(1, 'Dips', 'Push', 12, 0),
(1, 'Dips', 'Push', 12, 0),
(1, 'Dragonflags', 'Core', 5, 0),
(1, 'Dragonflags', 'Core', 5, 0),
(1, 'Pistol squats', 'Legs', 5, 0),
(1, 'Pistol squats', 'Legs', 5, 0),

-- Rutina 2 (Roberto)
(2, 'Pull ups', 'Pull', 8, 0),
(2, 'Pull ups', 'Pull', 8, 0),
(2, 'Dips', 'Push', 15, 0),
(2, 'Dips', 'Push', 15, 0),
(2, 'abwheel', 'Core', 15, 0),
(2, 'Dragonflags', 'Core', 15, 0),
(2, 'squats', 'Legs', 8, 60),
(2, 'squats', 'Legs', 8, 60)

SELECT u.username, r.id AS rutina_id, e.names AS ejercicio, s.reps, s.extra_weight
FROM users u
JOIN routines r ON r.username_id = u.id
JOIN exercises e ON e.routines_id = r.id
JOIN sets s ON s.exercises_id = e.id