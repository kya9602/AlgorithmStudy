var answer = [];
let answers = [1, 2, 3, 4, 5];

const one = [1, 2, 3, 4, 5];
const two = [2, 1, 2, 3, 2, 4, 2, 5];
const three = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

let answer1 = answers.filter((a, i) => a === one[i % 5]).length; // .length 는 맞힌 갯수
let answer2 = answers.filter((a, i) => a === two[i % 8]).length;
let answer3 = answers.filter((a, i) => a === three[i % 10]).length;

let max = Math.max(answer1, answer2, answer3);

if (answer1 === max) answer.push(1);
if (answer2 === max) answer.push(2);
if (answer3 === max) answer.push(3);

console.log(answer);
return answer;
