CREATE DATABASE IntelligentsForms;

CREATE TABLE USERS(
  user_id SERIAL PRIMARY KEY,
  user_name VARCHAR(255),
  fiscal_code INT,
  adress VARCHAR(255),
  email VARCHAR(255) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL
);