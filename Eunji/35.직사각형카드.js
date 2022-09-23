function solution(sizes) {
  let w = sizes.map((el) => el[0]); //w와 h를 정의해주기
  let h = sizes.map((el) => el[1]); //sizes를 map으로 돌려서 각각 element의 0,1번째

  for (let i = 0; i < sizes.length; i++) {
    if (w[i] > h[i]) {
      let temp = w[i];
      w[i] = h[i];
      h[i] = temp;
    }
  }
  const maxW = Math.max(...w);
  const maxH = Math.max(...h);

  const answer = maxW * maxH;
  return answer;
}
