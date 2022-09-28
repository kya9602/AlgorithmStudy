// 가장 높은 점수를 받은 사람이 여럿일 경우, return하는 값을 오름차순 정렬해주세요.

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [2, 1, 2, 3, 2, 4, 2, 5];
const arr3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

let a= 0;
let b= 0;
let c= 0;
const answers = [1,2,3,4,5];

let answer =[];
//console.log(arr3[9 % 10])

/* for(let i=0;i<answers.length;i++){
    if(arr1[i % 5]===answers[i]){
        a++;
    }else if(arr2[i % 8]===answers[i]){
        b++;
    }else if(arr3[i % 10]===answers[i]){
        c++;
    }
}
console.log(a,b,c) */

for(let i=0;i<answers.length;i++){
    if(arr1[i % 5]===answers[i]){
        a++;
    }if(arr2[i % 8]===answers[i]){
        b++;
    }if(arr3[i % 10]===answers[i]){
        c++;
    }
}
console.log(a,b,c)
console.log(Math.max(a,b,c));

if(a===Math.max(a,b,c)){
    answer.push(1)
}if(b===Math.max(a,b,c)){
    answer.push(2)
}if(c===Math.max(a,b,c)){
    answer.push(3)
}
console.log(answer)