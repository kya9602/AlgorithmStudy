const answers = [1, 3, 2, 4, 2];

// 반복되는 답안의 수
const one = [1, 2, 3, 4, 5]; // 5개
const two = [2, 1, 2, 3, 2, 4, 2, 5]; // 8개
const three = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]; // 10개

// 인당 점수 초기화
// let oneScore = 0;
// let twoScore = 0;
// let threeScore = 0;

let score = [0, 0, 0];

// answers와 개인별 답안 비교하여 점수 ++
for (let i = 0; i < answers.length; i++) {
  if (answers[i] === one[i % 5]) {
    score[0]++;
  }
  if (answers[i] === two[i % 8]) {
    score[1]++;
  }
  if (answers[i] === three[i % 10]) {
    score[2]++;
  }
}

// 최고 점수 찾기
const max = Math.max(...score);

// 답 result는 배열임
const result = [];

// 개인별 점수가 max와 같으면 result에 개인별 번호를 담아줌

// if (score[0] === max) {
//   result.push(1);
// } 
// if (score[1] === max) {
//   result.push(2);
// } 
// if (score[2] === max) {
//   result.push(3);
// }

for ( let i=0; i < score.length; i++ ) {
  if (score[i] === max) {
    result.push(i+1)
  }
}

console.log(result);

return result;