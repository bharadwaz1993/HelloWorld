const express = require('express')
const app = express()

app.get('/', (req,res) => {
    res.send('Hello my Name is Bharadwaz Uppala and I am ganesh Friend')
})

app.listen(3000)