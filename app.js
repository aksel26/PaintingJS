const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext('2d');
const colors = document.getElementsByClassName("jsColor");
const range = document.getElementById("jsRange");
const mode = document.getElementById("jsMode");
const saveBtn = document.getElementById("jsSave");
const INITIAL_COLOR = "black"
const CANVAS_SIZE = 700;
// CSS에 사이즈를 지정한 것 말고 실제 캔버스 크기를 지정해 주어야 한다.
canvas.width = CANVAS_SIZE;
canvas.height = CANVAS_SIZE;

ctx.fillStyle = "white";
ctx.fillRect(0, 0, canvas.width, canvas.height);

ctx.strokeStyle = INITIAL_COLOR;
ctx.fillStyle = INITIAL_COLOR;
ctx.lineWidth = 2.5;


let painting = false;
let filling = false;

function stopPainting() {
    painting = false;
}

function startPainting() {
    painting = true;
}
function onMouseMove(event) {


    //MouseEvent {isTrusted: true, screenX: 315, screenY: 640, clientX: 253, clientY: 529, …}
    // client는 윈도우에서의 x, y좌표를 나타냄
    // 캔버스 안에서의 좌표를 얻기위해서는 offset이 필요하다.

    const x = event.offsetX;
    const y = event.offsetY;

    // 클릭하는 순간을 인지하고 painting을 시작해야 한다.
    if (!painting) {
        ctx.beginPath();
        ctx.moveTo(x, y);
    } else {
        ctx.lineTo(x, y);
        ctx.stroke();
    }
}

function handleColorClick(event) {
    const color = event.target.style.backgroundColor;
    ctx.strokeStyle = color;
    ctx.fillStyle = color;
}

function handleRangeChange(event) {
    const size = event.target.value;
    ctx.lineWidth = size;
}

function handleModeClick() {
    if (filling) {
        filling = false;
        mode.innerText = "Fill";

    } else {
        filling = true;
        mode.innerText = "Paint"
    }

}

function handleCanvasClick() {
    if (filling) {
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    }
}

function handleCM(event) {
    event.preventDefault();
}

function handleSaveClick() {
    const image = canvas.toDataURL();
    const link = document.createElement("a");
    link.href = image;
    link.download = "PaintJS[EXPORT]";
    link.click();

}
if (canvas) {
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", startPainting);
    canvas.addEventListener("mouseup", stopPainting);
    canvas.addEventListener("mouseleave", stopPainting);
    canvas.addEventListener("click", handleCanvasClick);
    canvas.addEventListener("contextmenu", handleCM);
}


// Array.from 메서드
// : object로부터 array를 만들어준다.
Array.from(colors).forEach(color => color.addEventListener("click", handleColorClick));


if (range) {
    range.addEventListener("input", handleRangeChange);
}


if (mode) {
    mode.addEventListener("click", handleModeClick);
}
if (saveBtn) {
    saveBtn.addEventListener("click", handleSaveClick);
}