const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'));

app.get('/', (req, res) => {
    console.log('Local root called');
    res.redirect('/info.html');
})

app.get('/test', (req, res) => {
    res.send('Test succeeded');
});

app.get('/data', (req, res) => {
    let exampleData = {
        name: 'Bilal',
        age: 21
    }

    res.send(exampleData);
});

app.listen(port, () => {
    console.log(`My First Rest Api listening at http://localhost:${port}`)
})