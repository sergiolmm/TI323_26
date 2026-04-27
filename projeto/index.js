/*. By SLMM */
const express = require('express')
const app = express()
const porta = process.env.PORT || 3000

app.get('/', function(req, res, next){
    res.json({message: "vivo"})
});

app.listen(porta, () => {
    console.log(`Escutando na porta ${porta}`);
})
