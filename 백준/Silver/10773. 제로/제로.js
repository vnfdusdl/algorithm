const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const caseCount = input[0];
const stack = [];
for (let i = 1; i <= caseCount; i++) {
  const value = parseInt(input[i]);
  if (value === 0) {
    stack.pop();
  }
  if (value !== 0) {
    stack.push(value);
  }
}

let result = 0;
for (let j = 0; j < stack.length; j++) {
  result += stack[j];
}

console.log(result)