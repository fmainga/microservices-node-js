const app = require('express')()

const port  = 3000

app.get('/books', (req,res)=>{
    console.log('Fetching books')
    res.json([
        {
            name: 'Things Fall Apart',
            author: 'Chinua Achebe'
        },
        {
            name: 'The River between',
            author: 'Ngugi wa Thiongo'
        },
        {
            name: 'Betrayal in the city',
            author: 'Francis Imbuga'
        }
    ])
})

app.listen(port, ()=>{
    console.log(`Books Service started on port ${port}`)
})