const solution = (lottos, win_nums) => {
    
  const result = []
  
  // 교집합 구하는 방법
  const arr = lottos.filter((num) => win_nums.includes(num)).length;
  const zero = lottos.filter(lotto => lotto === 0).length;

  const maxNum = arr + zero;
  const minNum = arr ;

      // 최고 순위
      if (maxNum == 6){
        result.push(1)
      } else if(maxNum == 5) {
        result.push(2)
      } else if(maxNum == 4) {
        result.push(3)
      } 
      else if(maxNum == 3) {
        result.push(4)
      } 
      else if(maxNum == 2) {
        result.push(5)
      } 
      // 1개나 2개일 땐 6등 (낙첨) 이므로 else로 통일
      else {
        result.push(6)
      } 


      // 최저 순위
      if (minNum == 6){
        result.push(1)
      } else if(minNum == 5) {
        result.push(2)
      } else if(minNum == 4) {
        result.push(3)
      } 
      else if(minNum == 3) {
        result.push(4)
      } 
      else if(minNum == 2) {
        result.push(5)
      } 
      // 1개나 2개일 땐 6등 (낙첨) 이므로 else로 통일
      else {
        result.push(6)
      } 
  
  return result
}
