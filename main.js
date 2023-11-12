var mouse_event = "empty";
var startX, startY;

canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

color = "black";
width_of_line = "1";

canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e)
{
    color = document.getElementById("color").value;
    width_of_line = document.getElementById("width_of_line").value;

    startX = e.clientX - canvas.offsetLeft;
    startX = e.clientY - canvas.offsetTop;

    mouse_event = "mousedown"
}

canvas.addEventListener("mousemove", my_mousemove);

function my_mousemove(e){
    currentX = e.clientX - canvas.offsetLeft;
    currentY = e.clientY - canvas.offsetTop;

    if (mouse_event == "mousedown"){
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;

        ctx.moveTo(startX, startY);
        ctx.lineTo(currentX, currentY);

        ctx.stroke();
    }

    startX = currentX;
    startY = currentY;

    
}

canvas.addEventListener("mouseup", my_mouseup);

function my_mouseup(e){
    mouse_event = "mouseup";
}

function clearArea(){
    ctx.clearRect(0,0, canvas.width, canvas.height);
}

// mobile/touchscreen controls

canvas.addEventListener("touchstart", my_touchstart);

// define function
function my_touchstart(e){
    // e holds the position of the touch
    color = document.getElementById("color".value);
    width_of_line = document.getElementById("width_of_line").value;

    startx = e.touches[0].clientX - canvas.offsetLeft;
    starty = e.touches[0].clientY - canvas.offsetTop;
}

canvas.addEventListener("touchmove", my_touchmove);

function my_touchmove(e){
    currentX = e.touches[0].clientX - canvas.offsetLeft;
    currentY = e.touches[0].clientY - canvas.offsetTop;

    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = width_of_line;

    ctx.moveTo(startx, starty); //pen will jump to these points
    ctx.lineTo(currentX, currentY);

    ctx.stroke();
    
    startx = currentX;
    starty = currentY;
}

// checks if screen width is below 992px

if (screen.width < 992){
    canvas.width = screen.width - 100;
    canvas.ehight = screen.height - 250
    document.body.style.overflow = "hidden";
}