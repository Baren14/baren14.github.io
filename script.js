function close_window(title){
    var window_id = "floating_window_" + title
    var window1 = document.getElementById(window_id);
    window1.style.display = "none"
}

function open_window(title){
    var window_id = "floating_window_" + title
    var window1 = document.getElementById(window_id);
    window1.style.display = "flex"
    title.innerHTML = title
}

drag_window(document.getElementById("floating_window_about"))
function drag_window(window1){
    var x1 = 0, y1 = 0, x2 = 0, y2 = 0;
    var header = document.getElementById("window_header");
    
    if (header) {
        header.onmousedown = drag_mouse_down;
    }

    function drag_mouse_down(e){
        e = e || window.event;
        e.preventDefault();
        x1 = e.clientX;
        y1 = e.clientY;
        document.onmouseup = drag_mouse_up;
        document.onmousemove = dragging;
    }
    function dragging(e){
        e = e || window.event;
        e.preventDefault();
        x2 = x1 - e.clientX;
        y2 = y1 - e.clientY;
        x1 = e.clientX;
        y1 = e.clientY;
        window1.style.top = (window1.offsetTop - y2) + "px";
        window1.style.left = (window1.offsetLeft - x2) + "px";
    }
    function drag_mouse_up(){
        document.onmouseup = null;
        document.onmousemove = null;
    }
}