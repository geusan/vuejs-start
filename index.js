const express = require('express')
const fs = require('fs')
const path = require('path')

const app = express()

app.use(express.static('static'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
})

app.listen(3000, () => {
  console.log('Express app is running on http://localhost:3000')
})