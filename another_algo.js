const keys1 = ["abc", 3, "yo"];
const vals1 = [42, "wassup", true];
// const expected1 = {
// abc: 42,
// 3: "wassup",
// yo: true,
// };


/**
 * Converts the given arrays of keys and values into an object.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<string>} keys
 * @param {Array<any>} values
 * @returns {Object} The object with the given keys and values.
 */
function zipArraysIntoMap(keys, values) {

    let map = {}
    for (var i=0;i<keys.length;i++) {
        map[keys[i]] = values[i];
        // console.log(map)
    }
    return map
}

console.log(zipArraysIntoMap(keys1, vals1))