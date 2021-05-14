const express = require("express");
const path = require('path')
const Sequelize = require('sequelize')
const { User } = require('./models')
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 3001;
const { get } = require('http')

const app = express();

// setting up environments
app.use(express.static(path.resolve(__dirname, 'client/build')))
app.use(bodyParser.json())
app.use(express.json())
app.use(express.urlencoded())

app.get('/api', (req, res) => {
    res.json({ message: 'Hello from server!' })
})

app.get('/api/users', async (req, res) => {
  const users = await User.findAll()
  res.json(users)
})

app.post('/api/users', async (req, res) => {
  const { firstName, lastName, email } = req.body
  const newUser = await User.create({
    firstName,
    lastName,
    email
  })

  res.json({
    id: newUser.id,
    firstName,
    lastName,
    email
  })
})

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client/build', 'index.html'))
})

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});