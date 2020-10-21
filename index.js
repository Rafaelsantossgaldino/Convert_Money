const express = require('express')
const app = express()
const path = require('path')

const convert = require('./lib/convert.js')

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))
app.use(express.static(path.join(__dirname, 'public')))

// Requisicao da pagina Home
app.get('/', (req, res) => {
    res.render('home')
})

// Requisicao da pagina de Cotacao
app.get('/cotacao', (req, res) => {
    const {cotacao, quantidade} = req.query
    if(cotacao && quantidade) {
    const conversao = convert.convert(cotacao, quantidade)
        res.render('cotacao', {
            error: false,
            cotacao: convert.money(cotacao),
            quantidade: convert.money(quantidade),
            conversao: convert.money(conversao)   
        })
    } else {
        res.render('cotacao', {
            error: 'Valores invalidos'
        })
    }
})

// Iniciando Servidor
app.listen(3000, err =>{
    if(err){
        console.log('Nao foi possivel Iniciar Servidor...')
    } else {
        console.log('Servidor Rodando...')
    }
})
