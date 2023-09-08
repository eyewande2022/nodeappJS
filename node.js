const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Creating a DockerFile Very soon and then Deploying')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
