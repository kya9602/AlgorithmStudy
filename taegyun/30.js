let sizes = [[60, 50], [30, 70], [60, 30], [80, 40]];
let a = sizes[0][0];
let b = sizes[0][1];
let c = 0;
let answer ;


for(i=0;i<sizes.length;i++){
    if(sizes[i][0]<sizes[i][1]){
       c = sizes[i][1]
       sizes[i][1] = sizes[i][0]
       sizes[i][0] = c;
    }
}
console.log(sizes[1])

for(i=0;i<sizes.length-1;i++){
    if(a < sizes[i+1][0]){
        a = sizes[i+1][0]
    }
    if( b <sizes[i+1][1]){
        b = sizes[i+1][1]
    }
}
answer = a * b ;

//console.log(answer);