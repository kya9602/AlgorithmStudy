// 어차피 다 찍는데, 가장 많이 맞힌 사람이 누구인지 알면된다.
function solution(answers) {
    var answer = [];                                        
    const A = [1, 2, 3, 4, 5];               
    const B = [2, 1, 2, 3, 2, 4, 2, 5];      // 수포자들의 정답은 패턴이있음  = 길이가 정해져있다  
    const C = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    let count = [0, 0, 0];                      // 수포자 1,2,3의 정답 개수를 카운트 할 count 변수를 배열로 만듦

    for(let i = 0; i < answers.length; i++) {       
        if(answers[i] == A[i % A.length]) count[0]++;
        if(answers[i] == B[i % B.length]) count[1]++;     // 수포자의 답안 인덱스와 answers의 정답 인덱스가 같다면
        if(answers[i] == C[i % C.length]) count[2]++;     // 수포자의 정답개수를 count[n]에 올려준다. (n=0,1,2)  
    }

    const max = Math.max(count[0], count[1], count[2]);         // count배열을 최댓값 메서드를 이용해 max 변수에 넣어준다.
    for(let i = 0; i < count.length; i++) {
        if(max == count[i]) answer.push(i + 1);          // count[i]가 max의 값과 같을때, count[i]는 0부터 시작하기때문에 i+0 해서                                  
    }
    return answer;
}
