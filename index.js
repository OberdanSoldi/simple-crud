import express from 'express';
const app = express();
app.use(express.json());

const edit = require('./routes/edit');
import read from './src/routes/read/index.js';
import create from './src/routes/create/index.js';
const remove = require('./routes/remove');

app.post('/post', post);
app.get('/get', get);
app.post('/update', edit);
app.delete('/delete', remove);

port = 4000;
app.listen(port, () => console.log(`Listening on port ${port}`));
