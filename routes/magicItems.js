import { Router } from "express";

import { magicItems } from "../data/index.js";

const magicItemsRoute = Router();

magicItemsRoute.get("/", (req, res) => {
    res.json(magicItems);
});

export default magicItemsRoute;