function solution(n) {
  var answer = 0;
  let a = n.toString(3).split("").reverse().join(""); // n을 3진법으로 바꾸기
  let ten = parseInt(a, 3);
  answer = ten;
  return answer;
}
