var express = require('express');
const bodyParser = require("body-parser");
var router = express.Router();

var [getStages] = require('../controllers/stage');
/* GET product listing. */
router.get('/', async function (req, res, next) {
  const stages = await getStages();
  res.send(stages);
});

module.exports = router;