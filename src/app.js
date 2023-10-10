const express = require('express')
const app = express()
const PORT = 3000

const customers = [
    {
        "name": "Dogu",
        "industry": "Software"
    },
    {
        "name": "Batu",
        "industry": "Manufacturing"
    },
    {
        "name": "Baris",
        "industry": "Turism"
    }
]

app.get('/', (req, res) => {
    res.send("Welcome!")
})

app.get('/api/customers', (req, res) => {
    res.send({"customers": customers})
})

app.post('/api/customers', (req, res) => {
    res.send('This is a post request');
})

app.listen(PORT, () => {
    console.log('App listenin on port ' + PORT)
})

