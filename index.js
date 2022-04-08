import express from 'express';
const app = express();
app.use(express.json());

import patch from './src/routes/patch/index.js';
import read from './src/routes/read/index.js';
import create from './src/routes/create/index.js';
import removeRoute from './src/routes/delete/index.js';

app.post('/post', post);
app.get('/get', get);
app.post('/update', edit);
app.delete('/delete', remove);

port = 4000;
app.listen(port, () => console.log(`Listening on port ${port}`));
