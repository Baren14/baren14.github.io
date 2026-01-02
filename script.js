function close_window(title){
    var window_id = "floating_window_" + title
    var window = document.getElementById(window_id);
    window.style.display = "none"
}

function open_window(title){
    var window_id = "floating_window_" + title
    var window = document.getElementById(window_id);
    window.style.display = "flex"
    title.innerHTML = title
}