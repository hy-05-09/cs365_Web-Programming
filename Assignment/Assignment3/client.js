
const scenes = [
  { text: "Burdened by financial hardship, you take on a secret mission from the post office, lured by its high pay.", img: null },
  { text: "Hired at once, your first task is to deliver a confidential letter.", img: "img/letter.jpg" },
  { text: "Deliver it to its destination, safe and swift.", img: null },
  { text: "Which path will you take?", img: "img/crossroads.jpg" },
  { text: "A mysterious old man offers you advice. How will you respond?", img: "img/old_man.jpg" },
  { text: "A wild wolf appears in front of you! What will you do?", img: "img/wolf.jpg" },
  { text: "You find some berries in the forest. Will you eat them?", img: "img/berry.jpg" },
  { text: "You find a tired horse tied to a tree. What will you do?", img: "img/horse.jpg" },
  { text: "In the forest, you hear a strange noise. How will you react?", img: null },
  { text: "A mysterious old man offers you a strange potion. What will you do?", img: "img/potion.jpg" },
  { text: "A magical portal appears before you. What will you do?", img: "img/portal.jpg" },
  { text: "A river blocks your path. How will you cross?", img: "img/river.jpg" },
  { text: "You discover a glowing book on a stone altar. What will you do?", img: "img/book.jpg" }
];

const optionContent = [
  [{ text: "Road", img: null },{ text: "Forest", img: null }],
  [{ text: "Listen carefully", img: null },{ text: "Ignore him and move on", img: null }],
  [{ text: "Fight the wolf", img: null },{ text: "Run away quickly", img: null }],
  [{ text: "Eat the berries", img: null },{ text: "Don’t risk it and walk away", img: null }],
  [{ text: "Leave it alone", img: null },{ text: "Feed the horse some berries and ride it", img: null }],
  [{ text: "Investigate the noise", img: null },{ text: "Stay on the path quietly", img: null }],
  [{ text: "Drink the potion", img: null },{ text: "Refuse politely", img: null }],
  [{ text: "Step into the portal", img: null },{ text: "Stay in this world", img: null }],
  [{ text: "Build a raft", img: null },{ text: "Swim across", img: null }],
  [{ text: "Open the book", img: null },{ text: "Leave it untouched", img: null }]
];


const result = [
    [{ time: 20, text: "Unlucky! The road was blocked, and it took you a long time to find another way." },
        { time: 0, text: "You are lucky! You found a shortcut." }],
    [{ time: 0, text: "By listening, you learned of a hidden shortcut." },
        { time: 10, text: "You ignored him, and nothing happened.." }],
    [{ time: 500, text: "You died while fighting the wolf." },
        { time: 0, text: "You escaped the wolf successfully." }],  
    [{ time: 0, text: "You ate the berries, regained your strength, and kept a few more for later." },
        { time: 0, text: "Nothing happened." }],
    [{ time: 20, text: "Nothing happened." },
        { time: 0, text: "You are now able to move faster." }],
    [{ time: 20, text: "A wild animal jumps out, and you barely escape, losing time." },
        { time: 0, text: "The noise fades away, and you continue without incident." }],
    [{ time: 500, text: "The potion contained poison. Your journey ends here, and you can no longer deliver the letter." },
        { time: 0, text: "Nothing unusual happens, and you continue your way." }],
    [{ time:20, text: "The portal dropped you into a bizarre realm, and it took you a long time to find your way back" },
        { time: 0, text: "Nothing unusual happened." }],
    [{ time: 10, text: "You made it across the river unharmed, though it cost you some time." },
        { time: 0, text: "Swift and determined, you crossed the river in no time." }],
    [{ time: 0, text: "When you opened the book, its radiant light carried you straight to your destination." },
        { time: 20, text: "Nothing unusual happened." }],
    [{ time: 0, text: "At last, you reached the destination, only to find it deserted." },
        { time: 0, text: "At last, you reached the destination and safely handed over the letter." }]
]

let idx = 0;
let optIdx = -1;
let resultIdx = -1;
let time = 60;
let state = "narr";
let prevChoice= -1;
const narration = document.getElementById("narration");
const back = document.getElementById("back");
const next = document.getElementById("next");
const option1 = document.getElementById("option1");
const option2 = document.getElementById("option2");


function disableButton(id) {
    document.getElementById(id).style.visibility = "hidden";  
}

function ableButton(id) {
    document.getElementById(id).style.visibility = "visible"; 
}

function hideButton(id) {
    document.getElementById(id).style.display = "none"; 
}
function showButton(id) {
    document.getElementById(id).style.display = "inline-block"; 
}
function displayChange(num){
    showButton("endBtn");
    hideButton("option1");
    hideButton("option2");
}

function controlNarration(btn){
    if (idx<3 || btn=="next")
        narration.innerHTML = scenes[idx].text;
    else 
        narration.innerHTML = result[resultIdx][prevChoice].text;

    if (scenes[idx].img) {
        sceneImage.src = scenes[idx].img;
        sceneImage.style.display = "block";
    } else {
        sceneImage.style.display = "none";
  }
}
function controlOption(){
    option1.innerHTML = optionContent[optIdx][0].text;
    option2.innerHTML = optionContent[optIdx][1].text;
}
function controlEnding(endState){
    state = "end";
    disableButton("next");
    disableButton("back");
    disableButton("option1");
    disableButton("option2");
    if (resultIdx == 9) {
        if (time<0){
            state = "sad";
        }
        else{
            state = "happy";
        }
        displayChange();
    }
    else if (endState) {
        state = endState;
        showEnding();
    } 
        
}
function showEnding(){
    sceneImage.style.display = "none";
    if (state == "sad"){
        narration.style.textShadow = "0 0 5px rgba(248, 95, 95, 1)";
        narration.style.fontSize = "20px";
        document.getElementById("sadEnding").style.display = "block";
        document.body.style.backgroundColor = "grey";

        
    }
    else if (state == "happy"){
        narration.style.fontSize = "20px";
        narration.style.textShadow = "0 0 10px rgb(255, 255, 255)";
        document.getElementById("happyEnding").style.display = "block";
        document.body.style.backgroundColor = "rgb(88, 212, 100)";

    }
    if (resultIdx == 9){
        if (state == "sad"){
        narration.innerHTML = result[10][0].text;
        }
        else if (state == "happy"){
            narration.innerHTML = result[10][1].text;
        }
    }
    hideButton("endBtn");
}
function changeState(a){
    if(idx<3){
        state="narr";
    }
    else {
        state=a;
    }
}
function chooseOption(num){
    resultIdx++;
    if (result[resultIdx][num].time==500){
        narration.innerHTML = result[resultIdx][num].text;
        hideButton("back");
        hideButton("next");
        hideButton("option1");
        hideButton("option2");
        controlEnding("sad");
    }
    else {
        let prevTime = time;
        time -= result[resultIdx][num].time;
        narration.innerHTML = "[남은 시간 : " + prevTime + " - " + result[resultIdx][num].time + " = " + time 
        +"] <br>" + result[resultIdx][num].text;
        console.log(result[resultIdx][num].time + "만큼 추가 :" + time);
        disableButton("back");
        ableButton("next");
        disableButton("option1");
        disableButton("option2"); 
        prevChoice = num;
    }
}

next.addEventListener("click", function(){
    idx++;
    if(idx==1){
        ableButton("back");
    }
    changeState("opt");
    if(state=="opt"){
        optIdx++;
        disableButton("next");
        ableButton("back");
        ableButton("option1");
        ableButton("option2");
        controlOption();
        if (optIdx == 4 && prevChoice ==1)
            option2.disabled = true;
        else if (optIdx == 5)
            option2.disabled = false;
    }
    else if (state=="narr"){
        if (idx>=3){
            disableButton("back");
        }
    }
    controlNarration("next");
});

back.addEventListener("click", function(){
    idx--;
    if(idx==0){
        disableButton("back");
    }
     if(state=="opt"){
        optIdx--;
        disableButton("option1");
        disableButton("option2");
        ableButton("next");
        if (idx>=3)
            disableButton("back");
    }
    changeState("narr");
    controlNarration("back");
});

option1.addEventListener("click", function(){
    chooseOption(0);
    changeState("narr");
    if (resultIdx == 9) {
        controlEnding();
    }
});

option2.addEventListener("click", function(){
    chooseOption(1);
    changeState("narr");
    if (resultIdx == 9) {
        controlEnding();
    }
});

endBtn.addEventListener("click", function(){
    showEnding();
});

document.getElementById("restartBtn").addEventListener("click", () => {
  location.reload();
});
