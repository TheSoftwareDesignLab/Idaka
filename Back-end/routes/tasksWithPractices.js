var express = require('express');
const bodyParser = require("body-parser");
var router = express.Router();
var [getTasks] = require('../controllers/taskswithpractices');


router.get('/', async function (req, res, next) {
  
  const tasks = await getTasks();
  
  res.send(tasks);
});
router.get('/setup', async function (req, res, next) {
  
  let {PythonShell} = require('python-shell');
var package_name = 'pandas'
let options = {
    args : [package_name]
}
PythonShell.run('./python-setup.py', options,function(err, results){
        if (err) throw err;
        else console.log('results', results);
        res.send(results);
    });
});
module.exports = router;