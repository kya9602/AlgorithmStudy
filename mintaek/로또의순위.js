//  0 <= lottos <= 45
// lottos의 원소는 중복 X , 정렬되어 있지 않을 수도 있다 (= 정렬하지 않아도 된다?)
// 순위 = 6-맞은 개수+1 = 7-맞은 개수 
// result [최소 순위, 최대 순위]

let lottos = [44, 1, 0, 0, 31,25];
let win_nums = [31, 10, 45, 1, 6, 19]

function solution(lottos, win_nums) {
    var answer = [];
    let zero = 0;
    let match = 0;
    for (let num of lottos) {
        if (num === 0){
            zero++;
        }
        if (win_nums.includes(num)){
            match++;
        }
    }
    const maxRank = zero === 0 && match === 0 ? 6 : 7 - (zero+match);
    const minRank = match === 0 ? 6 : 7 - match;
    answer.push(maxRank,minRank) 
    return answer;
}