import { dbFindOne, dbFind } from "../../database.js";


/** returns an array of all the items of a given type */
export const getAllItemsByType = async (type) => {
    return await dbFind({ type }).catch(err => console.log(err));
}

/**  returns an array of all the magic items with that name */
export const getitemsByName = async (type, name) => {
    console.log({ name, type });
    return await dbFindOne({ type, name }).catch(err => console.log(err));
};

/** returns an array of all the magic items of a given subtype */
export const getItemsBySubtype = async (type, subtype) => {
    return await dbFind({ type, subtype }).catch(err => console.log(err));
};

/** returns an array of all the types of magic items */
export const getSubtypes = async (type) => {
    return await dbFindOne({ documentType: type }).catch(err => console.log(err));
};
