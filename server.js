const express = require('express');
const app = express();
const quotesRouter = require('./src/routes/quotes')
const PORT = process.env.PORT || 4001;

app.use(express.static('public'));
app.use(express.json())

app.use('/api/quotes', quotesRouter)

app.listen(PORT, () => {
  console.log(`Server is running on Port: ${PORT}`)
})