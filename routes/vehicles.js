import { Router } from "express";

import { vehiclesData } from "../data/index.js";

const vehiclesRoute = Router();

vehiclesRoute.get("/", (req, res) => {
    res.json(vehiclesData);
});

export default vehiclesRoute;