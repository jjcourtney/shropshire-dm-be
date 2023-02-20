import express from 'express';
import { magicItems, vehiclesData } from './magic-items.js';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Get request to the homepage');
})
app.get('/magic-items', (req, res) => {
    res.json(magicItems)
})
app.get('/vehicles-data', (req, res) => {
    res.json(vehiclesData)
})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})

export default app;