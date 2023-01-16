const fs = require('fs');
let input = fs.readFileSync('dev/stdin').toString().split('\n');

const testCase = input[0];

const stack = [];
let top = 0;
let answer = '';

const cmdObj = {
  push: (x) => {
    stack[top] = x;
    top++;
  },
  pop: () => {
    if (top < 1) {
      return -1;
    }
    top--;
    return stack.splice(-1);
  },
  size: () => top,
  empty: () => {
    return top ? 0 : 1;
  },
  top: () => {
    return top ? stack[top - 1] : -1;
  },
};

for (let i = 1; i <= testCase; i++) {
  let [command, num] = input[i].split(' ');
  command = command.trim();
  if (command === 'push') {
    cmdObj.push(parseInt(num));
  }
  if (command === 'pop') {
    let res = cmdObj.pop();
    answer += `${res}\n`;
  }
  if (command === 'size') {
    let res = cmdObj.size();
    answer += `${res}\n`;
  }
  if (command === 'empty') {
    let res = cmdObj.empty();
    answer += `${res}\n`;
  }
  if (command === 'top') {
    let res = cmdObj.top();
    answer += `${res}\n`;
  }
}

console.log(answer);
