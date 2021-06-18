DROP TABLE IF EXISTS schedules;
DROP TABLE IF EXISTS users;
CREATE TABLE IF NOT EXISTS users (
    user_id SERIAL PRIMARY KEY,
	firstname VARCHAR(255) NOT NULL,
	lastname VARCHAR(255) NOT NULL,
	email VARCHAR(255) NOT NULL,
	password VARCHAR(255) NOT NULL
);
CREATE TABLE IF NOT EXISTS schedules (
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL,
    day INTEGER NOT NULL CHECK (day>=1 AND day<=7),
    start_at time NOT NULL,
    end_at time NOT NULL
);
ALTER TABLE schedules ADD FOREIGN KEY (user_id) REFERENCES users(user_id);