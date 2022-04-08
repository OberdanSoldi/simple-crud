import express from 'express';
const app = express();
app.use(express.json());

import patch from './src/routes/patch/index.js';
import read from './src/routes/read/index.js';
import create from './src/routes/create/index.js';
import removeRoute from './src/routes/delete/index.js';

app.use('/patch', patch);
app.use('/read', read);
app.use('/create', create);
app.use('/remove', removeRoute);

const port = 4000;
app.listen(port, () => console.log(`Listening on port ${port}`));
