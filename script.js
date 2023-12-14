let colorChanger = document.getElementById("changer");

colorChanger.oninput = function() {
    document.body.style.backgroundColor = colorChanger.value;
}
