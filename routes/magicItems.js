import { Router } from "express";

import { magicItems } from "../data/magicItems.js";
import { convertToHumanReadable, convertToallLowerNoSpaces } from "../utils/stringManipulation.js";

const magicItemsRoute = Router();

const getItemByName = name => {
    const items = []
    for (const magicItem in magicItems) {
        magicItems[magicItem].forEach((item) => {
            if (item.name.toLowerCase() === name.toLowerCase()) {
                items.push(item);
            }
        })
    }
    return items;
}

magicItemsRoute.get("/", (req, res) => {
    const { name } = req.query;
    if (!name) {
        res.json(magicItems);
    } else {
        const items = getItemByName(name);
        items ? res.json(items) : res.status(404).send(`${name} Not found`);

    }
});

magicItemsRoute.get("/type/:type", (req, res) => {

    const { type } = req.params
    const items = magicItems[convertToallLowerNoSpaces(type)];

    if (items) {
        res.json(items);
    } else {
        res.status(404).send(`${type} Not found`);
    }

});


magicItemsRoute.get("/types", (req, res) => {
    const namesArray = [];
    for (const magicItem in magicItems) {
        const humanReadable = convertToHumanReadable(magicItem);
        namesArray.push(humanReadable);
    }


    if (namesArray) {
        res.json({ types: namesArray });
    } else {
        res.status(404).send(`${types} Not found`);
    }
});

export default magicItemsRoute;