function solution(s) {
    var answer = [];
    const arr = new Array(26).fill(-1);
    
    for(let i = 0; i < s.length; i++){ 
        const ascii = s[i].charCodeAt(0);
        if(arr[ascii - 97] === -1){
            answer.push(-1);
            arr[ascii -97] = i;
        } else {
            const diff = i - arr[ascii - 97];
            answer.push(diff);
            arr[ascii-97] = i;
        }
    }
    return answer;
}