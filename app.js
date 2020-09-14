const canvas = document.getElementById("jsCanvas");
let painting = false;

function stopPainting() {
    painting = false;
}
function onMouseMove(event) {


    //MouseEvent {isTrusted: true, screenX: 315, screenY: 640, clientX: 253, clientY: 529, …}
    // client는 윈도우에서의 x, y좌표를 나타냄
    // 캔버스 안에서의 좌표를 얻기위해서는 offset이 필요하다.

    const x = event.offsetX;
    const y = event.offsetY;

    // 클릭하는 순간을 인지하고 painting을 시작해야 한다.

}
 

function onMousedown(event) {
    painting = true;
}

function onMouseUp(event) {
    stopPainting();
}

if (canvas) {
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", onMousedown);
    canvas.addEventListener("mouseup", onMouseUp);
    canvas.addEventListener("mouseleave", stopPainting);
}
