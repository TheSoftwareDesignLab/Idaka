var express = require('express');
const bodyParser = require("body-parser");
var router = express.Router();
var [getQueries, insertQuery, updateQueryRate,updatePracticeRate] = require('../controllers/query');

/* GET product listing. */
router.get('/', async function (req, res, next) {
  const queries = await getQueries();
  res.send(queries);
});
/**
 * POST product
 */
router.post('/', async function (req, res, next) {
  const newQuery = await insertQuery(req.body);
  res.send(newQuery);
});
  /**
 * UPDATE product
 */
router.put('/', async function (req, res, next) {
  console.log("q",req.body.query);
  console.log("r",req.body.rate);
  const newQuery = await updateQueryRate(req.body.query,req.body.rate);
  res.send(newQuery);
});
router.put('/rate', async function (req, res, next) {
  console.log("q",req.body.id);
  console.log("p",req.body.position);
  console.log("r",req.body.rate);
  const newQuery = await updatePracticeRate(req.body.id,req.body.rate,req.body.position);
  res.send(newQuery);
});
module.exports = router;