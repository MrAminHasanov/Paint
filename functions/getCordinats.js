export function getCordinats(e) {
    const xCor = e.pageX - e.target.offsetLeft;
    const yCor = e.pageY - e.target.offsetTop;
    return { x: xCor, y: yCor }
}