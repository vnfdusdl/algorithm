function solution(food) {
    var answer = '';
    for(let i = 1; i < food.length; i++){
        const num = Math.floor(food[i]/2);
        const str = i.toString().repeat(num);
        answer += str;
    }
    const reversed = answer.split("").reverse().join("");
    answer += '0'+ reversed;
    return answer;
}