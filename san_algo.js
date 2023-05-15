/* 
  Recursively reverse a string
  helpful methods:
  str.slice(beginIndex[, endIndex])
  returns a new string from beginIndex to endIndex exclusive
*/

const str1 = "abc";
const expected1 = "cba";

const str2 = "";
const expected2 = "";

/**
 * Recursively reverses a string.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str
 * @returns {string} The given str reversed.
 */
function reverseStr(str) {

    function reverseString(str) {
        // base case
        if (str.length === 0) {
            return str;
        }
        // recursive case
        else {
            console.log(str.substr(1) + str.charAt(0))
    
            return reverseString(str.substr(1)) + str.charAt(0);
        }
    }
    
    // example usage
    let str = "hello";
    console.log(reverseString(str)); // output: "olleh"
}

/*****************************************************************************/