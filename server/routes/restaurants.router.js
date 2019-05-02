const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.get('/', (req,res) => {
    // const queryString = `SELECT * FROM "restaurants-test";`;
    // add sorting to your query
    const queryString = `SELECT * FROM "restaurants-test" ORDER BY "name" ASC;`;

    pool.query(queryString)
        .then((response) => {
            res.send(response.rows);
        })
        .catch((err) => {
            console.log('Error getting data from database: ', err);
            res.sendStatus(500);
        })
});

router.post('/', (req,res) => {
    const restaurantObject = req.body;

    const queryString = `INSERT INTO "restaurants-test" (name, address, bestfood)
                    VALUES ($1,$2,$3,false);`;

    pool.query(queryString, [restaurantObject.name, restaurantObject.address, restaurantObject.bestfood])
        .then((response) => {
            res.sendStatus(201);
        })
        .catch((err) => {
            console.log('Error saving to DB: ', err);
            res.sendStatus(500);
        });
});

router.delete('/delete/:id', (req, res) => {
    // console.log(req.params);
    const id = req.params.id;
    // console.log(id);
    const queryString = `DELETE FROM "restaurants-test" WHERE id=$1;`;

    pool.query(queryString, [id])
        .then((dbResponse) => {
            res.sendStatus(200);
        })
        .catch((dbError) => {
            console.log('Error deleting: ', dbError);
            res.sendStatus(500);
        })

    // don't forget to point out Async issue
    // res.sendStatus(200);
});

module.exports = router;