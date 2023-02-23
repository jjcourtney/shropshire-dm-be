import { Router } from "express";

import { vehicleData } from "../data/vehicles.js";
import { convertToHumanReadable, convertToCamelCase } from "../utils/stringManipulation.js";

const vehiclesRoute = Router();

const getVehiclesByName = name => {
    const items = []
    for (const vehicle in vehicleData) {
        vehicleData[vehicle].forEach((item) => {
            if (item.name.toLowerCase() === name.toLowerCase()) {
                items.push(item);
            }
        })
    }
    return items;
}

vehiclesRoute.get("/", (req, res) => {
    const { name } = req.query;
    if (!name) {
        res.json(vehicleData);
    } else {
        const items = getVehiclesByName(name);
        items ? res.json(items) : res.status(404).send(`${name} Not found`);

    }
});


vehiclesRoute.get("/type/:type", (req, res) => {

    const { type } = req.params
    const items = vehicleData[convertToCamelCase(type)];

    if (items) {
        res.json(items);
    } else {
        res.status(404).send(`${type} Not found`);
    }

});

vehiclesRoute.get("/types", (req, res) => {
    const namesArray = [];
    for (const vehicle in vehicleData) {
        const humanReadable = convertToHumanReadable(vehicle);
        namesArray.push(humanReadable);
    }


    if (namesArray) {
        res.json({ types: namesArray });
    } else {
        res.status(404).send(`${types} Not found`);
    }

});


export default vehiclesRoute;