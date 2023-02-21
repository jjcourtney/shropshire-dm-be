import express from 'express';

import vehiclesRoute from './vehicles.js';
import magicItemsRoute from './magicItems.js';

const app = express()

app.use('/vehicles', vehiclesRoute);
app.use('/magic-items', magicItemsRoute);

export default app;