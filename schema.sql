DROP DATABASE IF EXISTS cows;

CREATE DATABASE cows;

USE cows;

CREATE TABLE cowsList (
  id int NOT NULL AUTO_INCREMENT,
  name varchar(255),
  description varchar(255),
  PRIMARY KEY (id)
);
