const fs = require('fs');
let input = parseInt(fs.readFileSync('/dev/stdin').toString());

const answer = [];
let count = 0;

function solution(input) {
  const move = (start, to) => {
    answer.push([start, to]);
    count += 1;
  };

  const hanoi = (n, start, to, via) => {
    if (n === 1) {
      move(start, to);
      return;
    }
    hanoi(n - 1, start, via, to);
    move(start, to);
    hanoi(n - 1, via, to, start);
  };

  hanoi(input, 1, 3, 2);
  console.log(count);
  return answer.map((i) => i.join(' ')).join('\n');
}

console.log(solution(input));
