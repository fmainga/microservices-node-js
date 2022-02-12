const app = require('express')()
const axios = require('axios')

const port = 5000

app.get('/',(req,res)=>{
    res.sendStatus(200)
})

app.get('/animals', async(req, res) => {
        try {
            const result = await axios.get('http://localhost:2000/animals')
            // console.log('Animals Payload: ', result.data)
            res.json(result.data)
        } catch (error) {
            console.log(error)
            res.sendStatus(500)
        }
})
app.get('/books', async(req, res) => {
    try {
        const result = await axios.get('http://localhost:3000/books')
        // console.log('Books: ', result.data)
        res.json(result.data)
    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
})
app.get('/fruits', async(req, res) => {
    try {
        const result = await axios.get('http://localhost:4000/fruits')
        // console.log('Fruits Payload: ', result.data)
        const data = result.data
        let index = 1
        data.forEach((item)=>{
            console.log(index+":"+item.name)
            index++
        })

        res.json(data)
    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
})

app.listen(port, ()=>{
    console.log(`Main service started on port ${port}`)
})