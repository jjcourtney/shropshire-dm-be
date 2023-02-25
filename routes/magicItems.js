import { Router } from "express";
import { getAllItemsByType, getItemsBySubtype, getitemsByName, getSubtypes } from "../data/utils/get.js";

const magicItemsRoute = Router();

const type = "magicItems";

magicItemsRoute.get("/", async (req, res) => {
    const { name } = req.query;
    if (!name) {
        const items = await getAllItemsByType(type);
        res.json(items);
    } else {
        const items = await getitemsByName(type, name)
        items ? res.json(items) : res.status(404).send(`${name} Not found`);

    }
});

magicItemsRoute.get("/type/:subtype", async (req, res) => {
    const { subtype } = req.params
    const items = await getItemsBySubtype(type, subtype);

    items ? res.json(items) : res.status(404).send(`${type} Not found`);

});


magicItemsRoute.get("/subtype", async (req, res) => {
    const items = await getSubtypes(type)
    items?.collections ? res.json({ types: items.collections }) : res.status(404).send(`${type} Not found`);

});

export default magicItemsRoute;