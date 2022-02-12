const app = require('express')()

const port = 4000

app.get('/fruits', (req,res)=>{
    console.log('Fetching fruits...')
    res.json([
        {
            name: 'Orange',
            country: 'Kenya'
        },
        {
            name: 'Guava',
            country: 'Uganda'
        },
        {
            name: 'apples',
            country: 'South Africa'
        }
    ])
})

app.listen(port, ()=>{
    console.log(`Fruits service started on port ${port}`)
})
