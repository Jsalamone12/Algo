const str1 = "Y(3(p)p(3)r)s";
const expected1 = true;

const str2 = "N(0(p)3";
const expected2 = false;

const str3 = "N(0)t ) 0(k";
const expected3 = false;

const str4 = "a(b))(c";
const expected4 = false;


function parensValid(str) {
  const stack = [];

  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    if (char === "(") {
      stack.push(char);
    } else if (char === ")") {
      if (stack.length === 0) {
        return false;
      } else {
        stack.pop();
      }
    }
  }

  return stack.length === 0;
}

console.log(parensValid(str4))