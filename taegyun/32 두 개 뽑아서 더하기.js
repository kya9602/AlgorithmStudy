const arr = [5,0,2,7];
let answer = [];




for(i=0;i<arr.length;i++){    

        for(j=i+1;j<arr.length;j++){
            
          answer.push(arr[i]+arr[j])
            
            }
          
    
}
arr.sort(function(a, b)  {
    return a - b;
  });
console.log(answer)
answer = [...new Set(answer)]
console.log(answer)