function solution(arr) {
  var answer = 0;
  for (let i = 0; i <= 10; i++) return arr.filter((v, i) => v != arr[i + 1]);
}
