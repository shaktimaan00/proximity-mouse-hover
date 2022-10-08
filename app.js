document.addEventListener('mouseover', (e) => {
    // console.log(e);

    const mouseX = e.clientX;
    const mouseY = e.clientY;

    const anchor = document.getElementById('main-img');
    const rekt = anchor.getBoundingClientRect();
    const anchorX = rekt.left + anchor.width / 2;
    const anchorY = rekt.top + anchor.height / 2;

    const angleDeg = angle(mouseX, mouseY, anchorX, anchorY);

    console.log(angleDeg);

    const eyes = document.querySelectorAll('.eye');

    eyes.forEach(eye => {
        eye.style.transform = `rotate(${90 + angleDeg}deg)`;
    })


})

function angle(cx, cy, ex, ey){
    const dy = ey - cy;
    const dx = ex - cx;

    const rad = Math.atan2(dy, dx);
    const deg = rad*180 / Math.PI;
    return deg;
}