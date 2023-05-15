const str1 = "hello";
const expected1 = "olleh";

const str2 = "hello world";
const expected2 = "olleh dlrow";

const str3 = "abc def ghi";
const expected3 = "cba fed ihg";




function reverseWords(str) {
  let words = str.split(" ")
  let reversedWords = []
  for( var i = 0; i < words.length; i++){
    let word = words[i];
    let reversedWord = ""
    for( var j = word.length-1; j >= 0; j--){
      reversedWord += word[j]
    }
    reversedWords.push(reversedWord);
  }
  return reversedWords.join(" ")
}


console.log(reverseWords(str2))