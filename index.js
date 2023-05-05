const express = require('express')
const app = express();
const PORT = (process.env.NODE_ENV === 'development' ? 2000 : 3000);


app.get('/', (req, res) => {

    console.log(req)
    console.log(res)

    res.send('hello world')
})

app.get('/json', (req, res) => {
    
    res.json({ "name": "Beni" })
})




app.listen(PORT, () => {
    console.log(`app listening on port ${PORT}`)
})