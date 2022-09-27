function solution(lottos, win_nums) {
    let answer = [];
    let zero = 0;
    let win = 0;
    
    for(let i=0; i<lottos.length; i++){
        if(lottos[i] == 0){
            zero++;
        }
    }
    for (let i = 0; i < lottos.length; i++) {
        for (let j = 0; j < win_nums.length; j++) {
            if (lottos[i] != 0 && lottos[i] == win_nums[j]) {
               win++;
            }
        }
    }
    function collect(num){
        if(num == 6)
            return 1;
        else if (num == 5)
            return 2;
        else if (num == 4)
            return 3;
        else if (num == 3)
            return 4;
        else if (num == 2)
            return 5;
        else
            return 6;
    }
    answer[0] = collect(win+zero);
    answer[1] = collect(win);
    return answer;
}