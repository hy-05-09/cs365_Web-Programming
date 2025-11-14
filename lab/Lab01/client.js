
let currentSound = null;
setInterval(getProgressFor, 15);

function getSoundPlayerFor(soundURL) {
    return function () {
        let mySound = new Audio(soundURL);
        document.getElementById("url").innerText = "Played: " + soundURL;
        currentSound = mySound;
        mySound.play();
    };
}

function getProgressFor() {
    if (currentSound != null && isFinite(currentSound.duration)) {
        let bar = document.getElementById("bar");
        bar.max = currentSound.duration;
        bar.value = currentSound.currentTime;
    }
}

function appendButtonForSound(title, soundURL) {
    let b = document.createElement("button");
    b.innerText = title;
    b.id = title;
    //TODO: Set b's innerText to the title, and add a click event listener to b using our function factory "getSoundPlayerFor"
    b.addEventListener("click", getSoundPlayerFor(soundURL));
    document.body.append(b);
}

document.getElementById("swing1").addEventListener("click", getSoundPlayerFor("sounds/battle/swing.wav"));
document.getElementById("swing2").addEventListener("click", getSoundPlayerFor("sounds/battle/swing2.wav"));
document.getElementById("swing3").addEventListener("click", getSoundPlayerFor("sounds/battle/swing3.wav"));

appendButtonForSound("Coin", "sounds/inventory/coin.wav");
appendButtonForSound("Bubble", "sounds/inventory/bubble.wav");

//bonus1까지 완료