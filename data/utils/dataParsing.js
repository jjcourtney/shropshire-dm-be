import fs from 'fs/promises';

export const outputJson = async (type, items) => {
    fs.writeFile(`./${type}.json`, JSON.stringify(items));
    console.log(`${type}.json written`);
}