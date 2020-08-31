document.addEventListener("mousemove", parallax);
const PARALLAX_SPEED = 1 / 800;

function getBackgroundImage() {
    return document.getElementById("background-image");
}

function parallax(e) {
    let backgroundImage = getBackgroundImage();
    let windowXCenter = window.innerWidth / 2;
    let mouseCursorX = e.clientX;
    let backgroundDepth = `${50 - (mouseCursorX - windowXCenter) * PARALLAX_SPEED}%`;
    backgroundImage.style.left = backgroundDepth;

}