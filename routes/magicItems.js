import { Router } from "express";

import { magicItems } from "../data/magicItems.js";

const magicItemsRoute = Router();


magicItemsRoute.get("/", (req, res) => {
    res.json(magicItems);
});

magicItemsRoute.get("/type/:type", (req, res) => {

    const { type } = req.params
    cleanType = type.toLowerCase();
    const items = magicItems[type]

    if (items) {
        res.json(items);
    } else {
        res.status(404).send(`${type} Not found`);
    }

});

export default magicItemsRoute;