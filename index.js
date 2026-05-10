const express = require('express')

const app = express()

app.get('/', (req, res) => {
  res.send('GitOps Working by ahad khalid khan v1')
})

app.listen(3000, () => {
  console.log('Server running')
})
