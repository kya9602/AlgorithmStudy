function solution(sizes) {
    
    // 명함 지갑의 사이즈는? max-width와 max-heigth를 곱한 값
    let maxWidth = 0
    let maxHeight = 0
    
    // sizes는 배열형식
    // 명함을 가로로 눕혀 수납한다면? => 조사한 w와 h중 큰 수가 0번째로(가로)
    
    const sortSize = sizes.map(([w, h]) => w > h ? [w,h] : [h,w])
    
    sortSize.map(([w,h]) => {
        if ( w > maxWidth )  maxWidth = w ;
        if ( h > maxHeight ) maxHeight = h ;
    })

    return maxWidth * maxHeight;
}