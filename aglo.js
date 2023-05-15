/* 
  Given in an alumni interview in 2021.
  String Encode
  You are given a string that may contain sequences of consecutive characters.
  Create a function to shorten a string by including the character,
  then the number of times it appears. 
  
  
  If final result is not shorter (such as "bb" => "b2" ),
  return the original string.
  */


  const str1 = "aaaabbcddd";
  const expected1 = "a4b2c1d3";
  
  const str2 = "";
  const expected2 = "";
  
  const str3 = "a";
  const expected3 = "a";
  
  const str4 = "bbcc";
  const expected4 = "bbcc";
temp = 0
  for(var i = 0; i<str1.length;i++){
    console.log(str1[i]);
    if (str1[i] == str1[i + 1]){
        temp = temp + 1;
        console.log(temp);
        }
        else (str1[i] != str1[i + 1]){
        temp = 0;
        console.log(temp);
    }
}

  /**
   * Encodes the given string such that duplicate characters appear once followed
   * by a number representing how many times the char occurs. Only encode strings
   * when the result yields a shorter length.
   * - Time: O(?).
   * - Space: O(?).
   * @param {string} str The string to encode.
   * @returns {string} The given string encoded.
   */
//   function encodeStr(str) {}
  
  /*****************************************************************************/