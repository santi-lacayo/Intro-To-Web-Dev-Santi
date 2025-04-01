function showText(id){
var text = document.getElementById(id)
if(text.style.display=="block") {
    text.style.display = "none";
}
else {
    text.style.display = "block";
}
}