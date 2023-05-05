const express = require('express')
const app = express();
const PORT = (process.env.NODE_ENV === 'development' ? 2000 : 3000);
const { getUserById } = require('./database/connection');

app.get('/', (req, res) => {

    console.log(req)
    console.log(res)

    res.send('hello world')
})

app.get('/json', (req, res) => {
    res.json({ "name": "Beni" })
})

app.get('/users/:id', (req, res) => {
    getUserById(req.params.id)
        .then(user => {
            res.json(user);
        })
        .catch(err=>{
            res.status(500).send(`Something went wrong, err: ${err}`)
        })
})




app.listen(PORT, () => {
    console.log(`app listening on port ${PORT}`)
})