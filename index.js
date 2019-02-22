// IMPORTES
const express = require('express')
const nunjucks = require('nunjucks')

// CONST
const app = express()

// NUNJUCKS CONFIGURAÇÃO
nunjucks.configure('views', {
  autoescape: true,
  express: app,
  watch: true
})

// APPS
app.use(express.urlencoded({ extended: false }))
app.set('view engine', 'njk')

// MIDWARE
const checkAgeParam = (req, res, next) => {
  const { age } = req.query

  if (!age) {
    return res.redirect('/')
  }

  return next()
}

// METHOD GET

app.get('/', (req, res) => {
  return res.render('index')

  return next()
})

app.post('/check', (req, res) => {
  const { age } = req.query

  if (req.body.age <= '18') {
    return res.redirect(`/minor/?age=${req.body.age}`)
  } else {
    return res.redirect(`/major/?age=${req.body.age}`)
  }
})
app.get('/minor/', checkAgeParam, (req, res) => {
  return res.render('minor', { age: req.query.age })
})

app.get('/major/', checkAgeParam, (req, res) => {
  return res.render('major', { age: req.query.age })
})
// PORT EXECUÇÃO
app.listen(3001)
