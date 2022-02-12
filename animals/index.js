const express = require('express')
const app = express()

const port = 2000

app.get('/animals', (req,res)=>{
    console.log('Fetching animals....')
    res.json([
        {
            name: 'Kangaroo',
            country: 'Australia'
        },
        {
            name: 'Elephant',
            country: 'Kenya'
        },
        {
            name: 'Lion',
            country: 'Tanzania'
        }
    ])
})

app.listen(port, ()=>{
    console.log(`Animal service started on port ${port}`)
})