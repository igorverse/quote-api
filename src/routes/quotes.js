const express = require('express')
const { quotes } = require('../../data')
const { getRandomElement } = require('../../utils')

const quotesRouter = express.Router()

quotesRouter.get('/random', (req, res, next) => {
  const quote = {
    quote: getRandomElement(quotes)
  }

  return res.json(quote)
})

module.exports = quotesRouter