const express = require('express')
const cors = require('cors');
const app = express()
const port = 3000
app.use(express.static('public'))


app.use(cors({
    origin: '*'
}));

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/check', (req, res) => {
  res.send('This is a new message from the other end.')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
