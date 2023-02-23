
export const convertToHumanReadable = (camelCaseString) => {
    const humanReadable = camelCaseString.match(/[A-Za-z][a-z]*/g).join(" ");
    return humanReadable.charAt(0).toUpperCase() + humanReadable.slice(1);
}

export const convertToallLowerNoSpaces = (rawString) => {
    return rawString.split(" ").join("").toLowerCase();
}

export const convertToCamelCase = (rawString) => {
    return rawString.split(" ").map((word, index) => {
        if (index === 0) {
            return word.toLowerCase();
        }
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }).join("");
}