function solution(lottos, win_nums) {
    
    let answer = [];
    let rank = [6, 6, 5, 4, 3, 2, 1] // 순위 6등은 0개,1개를 맞춰도 6등
    let count = 0 //0을 포함해서 맞춘 내 숫자들
    let zero_count = 0 //지워진 내 숫자들 

    for(let i = 0; i<lottos.length; i++){ //나의 로또번호만큼 i를 돌려보았을때
      if(win_nums.includes(lottos[i])){
      // 당첨 번호에 내가 산 로또 번호가 있다면 count에 포함시켜줘
        count++
      }else if(lottos[i]==0){ //아니면 그밖에 만약에 내 로또의 번호가 0과 같다면 
      // 가려진 숫자(0)을 센다.
        zero_count++
      }
      return answer; }
    }