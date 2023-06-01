-- Don't forget to add your create table SQL 
-- It is also helpful to include some test data

-- fs-react-shopping 


CREATE TABLE "food" (
id SERIAL PRIMARY KEY,
name VARCHAR(80),
quantity FLOAT,
unit VARCHAR (25),
purchased BOOLEAN DEFAULT FALSE);


INSERT INTO "food" ("name", "quantity", "unit")
VALUES ('Apples', '5', 'lbs');

SELECT * FROM "food";