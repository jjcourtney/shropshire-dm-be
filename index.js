import express from 'express';
import api from './routes/index.js';

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', api);

app.get('/', (req, res) => {
    res.send('Get request to the homepage');
})

app.listen(port, () => {
    console.log(`Shropshire DM API app listening on port ${port}`);
})

export default app;