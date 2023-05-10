const Dalai = require("dalai")
new Dalai().serve(3000)
var response=""
function askAlpaca(query) {
Dalai.request({
  model: "alpaca.7B",
  prompt: "How are u?",
}, (token) => {
    console.log(token)
  response+= token
}).then((ans)=>{
    return JSON.stringify({token: 'Hola soy alpaca'+ans})
})
}

module.exports = [askAlpaca]