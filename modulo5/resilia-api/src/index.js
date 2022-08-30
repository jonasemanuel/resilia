const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())

app.get('/', async (request, response) => {
  response.send([{ name: "Jonas" }])
})

app.listen(process.env.PORT || 3000, () => {
  console.log("Resilia API is up")
})