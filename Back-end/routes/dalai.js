var express = require('express');
const { includes } = require('../controllers/dalai');
var router = express.Router();

var [askAlpaca] = require('../controllers/dalai');
/* GET product listing. */
router.get('/:query', async function (req, res, next) {
console.log('query-alpaca',req.params.query)
  const Dalai = require('dalai')
  const dalai=new Dalai()
  var respon="Alpaca says: "
  var enviado=false
  var timer=false
 setTimeout(()=>{
    timer=true  },210000
  )
var result=await dalai.request({
  model: "alpaca.7B",
  prompt:  'Below is an instruction that describes a task, paired with an input that provides further context. Write a response that appropriately completes the request.\n\n ### Instruction:\n Give me an enumerated list of best practices for '+req.params.query+' with a description of each of them.\n' ,
  threads: 4,
  repeat_last_n: 64,
  repeat_penalty:1.3,
  n_predict:200,
  top_k:40,
  top_p:0.9,
  temp:0.8,
  debug: false,
}, (token) => {
  respon+=token
  console.log(respon)
  
  if((respon.includes('<end>') && !enviado)||(timer && !enviado))
  {
    
    if(!respon.includes('### Input:')||(respon.includes('### Input:')&&respon.includes('### Output:')))
    {
    console.log('Termino')
    enviado=true
    respon.replace('<end>',"");
    respon.replace('[end of text]',"");
    res.send(JSON.stringify({token: respon.split('Give me an enumerated list of best practices for '+req.params.query+' with a description of each of them.\n')[1]}))
    
  }
  }
})
});



module.exports = router;