/**
 * pick - Creates an object composed of the picked object properties:
 * @param {object} obj - the source object
 * @param {...string} fields - the properties paths to pick
 * @returns {object} - returns the new object
 */
export const pick = (obj, ...fields) => {

const resultPick = {};

for (const [key,values] of Object.entries(obj)) { 

    if (fields.includes(key)) {
        resultPick[key] = values;
    }
}
  return resultPick;
};
