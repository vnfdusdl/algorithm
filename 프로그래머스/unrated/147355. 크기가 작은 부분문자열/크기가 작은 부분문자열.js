function solution(t, p) {
    var answer = 0;
    
    for(let i = 0; i < t.length; i++){
        const pLength = p.length
        const temp = t.substr(i, pLength);
        if(temp.length < pLength){
            break;
        }
        if(parseInt(temp) <= parseInt(p)){
            answer++;        
        }
    }
    
    return answer;
}