
function solution(numbers) {
    var answer = [];
    for(let i=0; i<numbers.length ; i++){
        for(let n=i+1; n<numbers.length; n++){
            const sum = numbers[i] + numbers[n];
            answer.push(sum)
        }
    }
    answer = [...new Set(answer)]
    return answer.sort((a, b) => a - b);
}