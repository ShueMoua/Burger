DROP DATABASE IF EXISTS burgers_db;

CREATE database burgers_db;

USE burgers_db;

CREATE TABLE burgers (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    burger_name VARCHAR(30),
    devoured BOOLEAN DEFAULT false
);


-- CREATE TABLE burgers (
-- id INT AUTO_INCREMENT NOT NULL,
-- burger_name VARCHAR(30),
-- devoured BOOLEAN DEFAULT false,
-- createdAt timestamp NOT NULL,
-- PRIMARY KEY(id)
-- );