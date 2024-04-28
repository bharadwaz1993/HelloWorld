const express = require('express')
const app = express()

app.get('/', (req,res) => {
    res.send('Hello my Name is Bharadwaz and this is a GCP Demo Project')
})

app.listen(3000)