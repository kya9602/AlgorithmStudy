function solution(answers) {
    var answer = [];
    
    let 수포자1 = [1,2,3,4,5];
    let 수포자2 = [2,1,2,3,2,4,2,5];
    let 수포자3 = [3,3,1,1,2,2,4,4,5,5];

    let 맞은개수 = [0,0,0];

    for (let 정답 =0; 정답 < answers.length; 정답++){
        
        if(answers[정답] == 수포자1[정답%5]) {
            맞은개수[0]++;
        }
        if(answers[정답] == 수포자2[정답%8]) {
            맞은개수[1]++;
        }
        if(answers[정답] == 수포자3[정답%10]) {
            맞은개수[2]++;
        }
    }

    const maxCount = Math.max.apply ( null , 맞은개수 ) ;
    for(let 일등은누구 = 0; 일등은누구 < 3; 일등은누구++) {
        if (맞은개수[일등은누구] === maxCount) {
            answer.push(일등은누구+1);
        }
    }
    return answer;
}