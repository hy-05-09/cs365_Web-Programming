let currentImage = null;

/* gallery id 요소 안에 있는 모든 img */
let imgList = document.querySelectorAll("#gallery img");

// for (img of imgList) {
//     img.addEventListener("mouseenter", function setBackgroundImage(){})
// }
// 아래랑 똑같음

function setBackgroundImage(){
    // console.log(this);
    // document.body.style.backgroundImage = 'url("img/mantis.jpg")';
    document.body.style.backgroundImage = 'url("' + this.src + '")';
}

function updateBackgroundImage(){
    if (currentImage == null) {
        document.body.style.backgroundImage = 'none';
    }
    else {
        document.body.style.backgroundImage = 'url("' + currentImage + '")';
    }
}

function setCurrentImage(){
    if(this.src == currentImage){
        currentImage = null;
        img.style.borderColor = "gray";
    }
    else {
        currentImage = this.src;

        document.querySelectorAll("#gallery img").forEach(function(img){img.style.borderColor = "gray";});
        //아래 for문이랑 똑같음
        // for(img of imgList){
        //     //in은 index, of는 value? 어쩌구
        //     img.style.borderColor = "gray";
        // }
        this.style.borderColor = "yellow";
        updateBackgroundImage();
    }
}

// (a) => {
//     return a + 100;
// }
// (a) => a+ 100;
// 두개는 똑같음 한줄이면 return 생략 가능

function makeThisImageActive(){
    img.addEventListener("click", setCurrentImage);
    img.addEventListener("mouseenter", setBackgroundImage);
    // 함수 뒤에 ()를 붙이면 return값이 인수로 들어가는 것. ()를 안 붙이면 함수 자체를 불러오는 것.
    img.addEventListener("mouseleave", updateBackgroundImage);
}

for (img of imgList) {
    img.addEventListener("click", setCurrentImage);
    img.addEventListener("mouseenter", setBackgroundImage);
    // 함수 뒤에 ()를 붙이면 return값이 인수로 들어가는 것. ()를 안 붙이면 함수 자체를 불러오는 것.
    img.addEventListener("mouseleave", updateBackgroundImage);
}

// mouseover는 위에만 있으면, mouseenter는 클릭하면

document.getElementById("addImageButton").addEventListener("click", function(){
    let url = document.getElementById("imageURL").value;
    let imgElt = document.createElement("img");
    imgElt.src = url;
    imgElt.width = 200;
    document.getElementById("gallery").append(imgElt);
    makeThisImageActive;
});

// document.getElementById("gallery").childrens or children[4]
// document.getElementById("outputText").innerText = "selected" + this.src;
// selected에 strong 태그 같은 거 달려면 innerText 말고 innerHtml 같은 거 써야함