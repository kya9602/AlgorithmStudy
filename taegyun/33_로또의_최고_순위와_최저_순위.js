const lottos = [45, 4, 35, 20, 3, 9];
const win_nums = [20, 9, 3, 45, 4, 35];
let count = 0;
let zero = 0;
let result = [];


for(i=0;i<lottos.length;i++){
    console.log('i가'+i+'일때')
    if(lottos[i]===0){
        zero++;
    }

    for(j=0;j<win_nums.length;j++){
        console.log('j는 '+j)
        if(lottos[i]===win_nums[j]){
            count++;            
        }
    }
}

//최고순위~
if(count+zero===6){
    result.push(1);
}else if(count+zero===5){
    result.push(2);
}else if(count+zero===4){
    result.push(3);
}else if(count+zero===3){
    result.push(4);
}else if(count+zero===2){
    result.push(5);
}else{
    result.push(6);
}
//최저순위~
if(count===6){
    result.push(1);
}else if(count===5){
    result.push(2);
}else if(count===4){
    result.push(3);
}else if(count===3){
    result.push(4);
}else if(count===2){
    result.push(5);
}else{
    result.push(6);
}

//console.log(result)