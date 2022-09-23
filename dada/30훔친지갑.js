function solution(sizes) {
    let width = 0;
    let height = 0;
    sizes.map(([w,h]) => w > h ? [w,h] : [h,w])
        .forEach(size => {
            width = Math.max(width, size[0]);
            height = Math.max(height, size[1]);
        });
    return width * height;
}
