function solution(numbers) {
  const result = [];

  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      const sum = numbers[i] + numbers[j];
      result.push(sum);
    }
  }

  // 중복을 제거해주는 set
  const answer = [...new Set(result)];

  // sort를 활용한 오름차순 정렬
  return answer.sort((a, b) => a - b);
}