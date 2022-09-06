const axios = require('axios')
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')


const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9zb2h5aGZ4eHRnY3lyZGhzdHFzIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjE5OTY3MzksImV4cCI6MTk3NzU3MjczOX0.8dE8eQ7jJLzb4K0tr0d_eQloAjYvPjoue0mFSoUZKe8"
const API_URL = `https://osohyhfxxtgcyrdhstqs.supabase.co/rest/v1/users?apikey=${TOKEN}`

const app = express()

app.use(cors())
app.use(bodyParser())

app.get('/users', async (req, res) => {
  const { data } = await axios.get(API_URL)
  res.json(data)
})

app.post('/users', async (req, res) => {
  const { data } = await axios.post(API_URL, req.body)
  res.json(data)
})

app.patch('/users', async (req, res) => {
  const { data } = await axios.patch(API_URL, req.body)
  res.json(data)
})

app.delete('/users/:id', async (req, res) => {
  const { data } = await axios.delete(`${API_URL}&id=eq.${req.params.id}`)
  res.sendStatus(200)
})

app.listen(3000, () => { console.log("Resilia API UP") })