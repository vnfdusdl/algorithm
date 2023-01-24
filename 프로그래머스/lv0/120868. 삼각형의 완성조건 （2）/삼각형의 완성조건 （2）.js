function solution(sides) {
    var answer = 0;
    const largeNum = sides[0] >= sides[1] ? sides[0] : sides[1];
    const smallNum = sides[0] >= sides[1] ? sides[1] : sides[0];
    const num1 = largeNum - largeNum + smallNum;
    const num2 = largeNum + smallNum - largeNum -1;
    answer += num1;
    answer += num2;
    return answer;
}