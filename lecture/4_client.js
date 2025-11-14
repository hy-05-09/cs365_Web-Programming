


// let imgList = document.getElementById("gallery").children;
let imgList = document.querySelectorAll("#gallery img");
let buttons = document.querySelectorAll("button");
let currentImage = null;

function changeImage() {
    document.getElementById("img1").src = 'url("img/cone.png")';
    
}

function setBackgroundImage(){
    document.body.style.backgroundImage = 'url("' + this.src + '")';
}

function changeInnerText(){
    document.getElementById("text").innerText = "hi!";
}

for(img of imgList){
    img.addEventListener("mouseover", setBackgroundImage);
    img.addEventListener("click", changeImage);
}

let button = document.getElementById("textchange");
button.addEventListener("click", changeInnerText);

