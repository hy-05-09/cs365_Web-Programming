


let f = function() {
    document.body.style.backgroundColor = "#0FF";
};

function getColorChangeFunction(whichColor) {
    let t = function() {
        document.body.style.backgroundColor = whichColor;
    };
    whichColor = "#888";
    return t;
}

document.getElementById("teal").addEventListener("click", f);


function getImageChange(whichImage) {
    return function( ) {
        document.getElementById("catImage").src = whichImage;
    };
}

// document.getElementById("cat1").addEventListener("click", getImageChange("img/cat1.jpg"));