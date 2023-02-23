
export const convertToHumanReadable = (camelCaseString) => {
    const humanReadable = camelCaseString.match(/[A-Za-z][a-z]*/g).join(" ");
    return humanReadable.charAt(0).toUpperCase() + humanReadable.slice(1);
}

export const convertToallLowerNoSpaces = (rawString) => {
    return rawString.split(" ").join("").toLowerCase();
}