var express = require('express');
const bodyParser = require("body-parser");
var router = express.Router();
var [getPractices, insertPractice,searchPractices,getPracticesByTask] = require('../controllers/practice');

/* GET product listing. */
router.get('/', async function (req, res, next) {
  const practices = await getPractices();
  res.send(practices);
});
router.get('/find/:q', async function (req, res, next) {
  console.log("req.p",req.params.q)
  const practices = await searchPractices(req.params.q);
  console.log("lo que trae",practices);
  res.send(practices)
});
router.get('/bytask/:q', async function (req, res, next) {
  console.log("req.p",req.params.q)
  const practices = await getPracticesByTask(req.params.q);
  console.log("lo que trae",practices);
  res.send(practices)
});

router.get('/search/:query',  function (req, res, next) {
  let {PythonShell} = require('python-shell');

    var options = {
      args: [req.params.query]
    };
    console.log('query',req.params.query)
  
    PythonShell.run('IR.py', options, async function (err, results) {
      if (err)
        throw err;
      // Results is an array consisting of messages collected during execution
      console.log('results: %j', results);
    res.send(results)}); 
  


 
});

/**
 * POST product
 */
router.post('/', async function (req, res, next) {
  const newPractice = await insertPractice(req.body);
  res.send(newPractice);
});
router.use(bodyParser.json());
module.exports = router;