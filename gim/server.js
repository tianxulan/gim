const express = require('express')
const cors = require('cors');
const app = express()
const port = 3000

let = message_list = []

app.use(express.static('public'))

app.use(cors({
  origin: '*'
}));

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/check', (req, res) => {
  console.log("Receive a new check request")
  if (message_list.length == 0)
  {
    res.send("No message found in server")
  }
  else
  {
    res.send(message_list.shift())
  }
})

app.get('/send', (req, res) => {
  console.log("Receive a new send request: " + req.query.m)
  message_list.push(req.query.m)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
