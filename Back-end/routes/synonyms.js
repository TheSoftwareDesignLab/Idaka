var express = require('express');
const bodyParser = require("body-parser");
var router = express.Router();
var [insertSynonym] = require('../controllers/synonym');

/* GET product listing. */
router.get('/:query', async function (req, res, next) {
  let {PythonShell} = require('python-shell');
  var options = {
    args: [req.params.query]
  };
  console.log('query',req.params.query)

  PythonShell.run('synonyms.py', options, async function (err, results) {
    if (err)
      throw err;
    // Results is an array consisting of messages collected during execution
    console.log('synonyms: %j', results);
  res.send(results)});
});

router.post('/', async function (req, res, next) {
  const newSynonym = await insertSynonym(req.body);
  res.send(newSynonym);
});
module.exports = router;