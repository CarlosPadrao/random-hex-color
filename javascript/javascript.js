// JS AQUI

var body = document.getElementById('body')
var result = document.getElementById('result')
var btn = document.getElementById('btn')
var corDefault = "#c20eed"

body.style.backgroundColor = corDefault
result.innerHTML = corDefault

btn.addEventListener("click", () => {
    var randomColor = ('#' + Math.random().toString(16).substring(2,8))
    result.innerHTML = randomColor
    body.style.backgroundColor = randomColor
});