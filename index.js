const express = require('express');

const app = express();

app.use(express.json());

const edit = require('./routes/edit');
const get = require('./routes/get');
const post = require('./routes/post');
const remove = require('./routes/remove');

app.post('/post', post);
app.get('/get', get);
app.post('/update', edit);
app.delete('/delete', remove);

port = 4000;
app.listen(port, () => console.log(`Listening on port ${port}`));
