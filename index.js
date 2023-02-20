import express from 'express';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Get request to the homepage');
})
app.get('/test', (req, res) => {
    res.send('Get request to the test page');
})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})

export default app;