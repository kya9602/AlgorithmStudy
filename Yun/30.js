function solution(sizes) {
    let w = [];
    let h = [];
    
    sizes.map(([a,b]) => {
        if(a>b){
            w.push(a);
            h.push(b);
        }else{
            w.push(b);
            h.push(a);
        }
    })
    return Math.max(...h) * Math.max(...w)
}