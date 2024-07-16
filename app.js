import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import { dirname } from 'path'

const app = express()
const Port = 3000

const __dirname = dirname(fileURLToPath(import.meta.url))
app.use(express.static(path.join(__dirname, 'public')))

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.get('/', (req, res) => {
  res.send('<h1>Seja Bem-Vindo</h1>')
})

app.get('/user', (req, res) => {
  res.render('testeEjs', {menssagem: 'Hello World'})
})

app.get('/produtos', (req, res) => {
  res.send('<ul><li>Fone</li><li>Carteira</li><li>Bolsa</li><li>Televisão</li></ul>')
})

app.get('/cadastro', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'Cadastro.html'))
})

app.get('/isp_adivocacia', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', '/ISPAdivocacia/ISP_Adivocacia_Inicio.html'))
})

app.get('/isp_adivocacia/quem_somos', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', '/ISPAdivocacia/ISP_Adivocacia_QuemSomos.html'))
})

app.get('/isp_adivocacia/contato', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', '/ISPAdivocacia/ISP_Adivocacia_Contato.html'))
})

app.get('/calculadora_de_imc', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', '/CalculadoraDeIMCMobile/CalculadoraDeIMC.html'))
})

app.get('/orion', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', '/Orion/orion.html'))
})

app.listen(Port, () => {
  console.log(`Servidor Conectado...`)
})