const express = require('express'),
        bodyParser = require('body-parser'),
        // cors = require('cors'),
        app = express(),
        control = require ('./controllers/api-controllers'),
        port = 3005;

app.use(bodyParser.json());
// app.use(cors);


app.listen(port, () => {
    console.log(`listening on port ${port}`)
});


app.post('/api/snippets/new', control.create);
app.get('/api/snippets', control.read);
app.get('/api/snippets/:tags', control.tags);
// app.put('/api/snippets/:update', control.update);
// app.delete('/api/snippets/:id', control.delete);

// const dataToExport = require('./path to where dataToExport exists - its a psuedo database to use before actual database is used)