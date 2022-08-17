const express = require('express')
const { quotes } = require('../../data')
const { getRandomElement } = require('../../utils')

const quotesRouter = express.Router()

quotesRouter.get('/', (req, res, next) => {
  const { person } = req.query

  const filteredQuotes = person ? quotes.filter(quote => quote.person.toLowerCase() === person.toLowerCase()) : quotes

  return res.json({
    quotes: filteredQuotes
  })
})

quotesRouter.get('/random', (req, res, next) => {
  const quote = {
    quote: getRandomElement(quotes)
  }

  return res.json(quote)
})

module.exports = quotesRouter