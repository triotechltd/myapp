const express = require('express')

const app = express()

app.get('/', (req, res) => {
  res.send('GitOps Working by ahad khalidd')
})

app.listen(3000, () => {
  console.log('Server running')
})
