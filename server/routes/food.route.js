const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');


router.get('/', (req, res) => {

    const sqlText = `SELECT * FROM "food" ORDER BY "name" ASC;`;
    pool.query(sqlText)
        .then((result) => {
            console.log(`Got stuff back from the database`, result);
            res.send(result.rows);
        })
        .catch((error) => {
            console.log(`Error making database query ${sqlText}`, error);
            res.sendStatus(500);
        })
    })

   
router.post('/', (req, res) => {

    const foods = req.body;
    const sqlText = `
        INSERT INTO "food" ("name", "quantity", "unit")
        VALUES ($1, $2, $3);
        `;
    // const foodvalues = [food.name, food.quantity, food.unit]

    pool.query(sqlText, [foods.name, foods.quantity, foods.unit])
        .then((result) => {
            console.log(foods);
            res.sendStatus(201);
        })
        .catch((error) => {
            console.log(`Error making database query ${sqlText}`, error);
            res.sendStatus(500);
        })
    })

router.put('/:id', (req, res) => {


    const idToUpdate = req.params.id

    const sqlText =`
    UPDATE TABLE "food"
    SET "purchased" = true
    WHERE "id" = $1;
    `
    pool.query(sqlText, [idToUpdate] )
        .then((result) => {
            res.sendStatus(200);
        })
        .catch((error) => {
            console.log(`Error making database query ${sqlText}`, error);
            res.sendStatus(500);
        })
    })

router.delete('/:id', (req, res) => {

    const idToDel = req.params.id

    const sqlText = `
    DELETE FROM "food"
    WHERE "id" = $1;
    `;
    pool.query(sqlText, [idToDel])
        .then((result) => {
            res.sendStatus(200);
        })
        .catch((error) => {
            console.log(`Error making database query ${sqlText}`, error);
            res.sendStatus(500);
        })
    })



module.exports = router;
