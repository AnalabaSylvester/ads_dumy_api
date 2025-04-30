const express = require('express')
const cors = require('cors')
const app = express()
const port = 4000

const ads = require('./ads')

app.use(cors())
app.use(express.json())

app.get('/api/ads', (req, res) => {
  res.json(ads)
})

app.listen(port, () => {
  console.log(`Connected to port ${port}`)
})
