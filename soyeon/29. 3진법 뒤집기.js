function solution(n) {
  
  // toString(진수) => 10진수를 다른 진수로 나타낼 때
  const transNum = n.toString(3);

  // string으로 변환한 transNum을
  // split를 사용하여 문자 하나 단위로 이루어진 배열로 만들고,
  // reverse를 사용하여 뒤집은 뒤,
  // join을 사용하여 배열의 원소를 문자열로 합치기
  const reverseNum = transNum.split("").reverse().join();

  // parseInt(string, 진수) => 다른 진수를 10진수로 나타낼 때
  return parseInt(reverseNum, 3);
}