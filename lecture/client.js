// function isCanvasSupported(){
//     let ctx = document.getElementById("myCanvas");
//     return !!(ctx.getContext && ctx.getContext('2d'));
//     //!!값 → 다시 한 번 반전시켜서, 최종적으로 true/false로만 변환 ex) !!"hello" -> true
// } 
// can call this from below, but not from app inside HTML, for instance

// if (isCanvasSupported){
//     let ctx = document.getElementById("myCanvas").getContext('2d');
//     ctx.fillStyle = "green";
//     ctx.fillRect(10,10,150,100);
// }

let app = Vue.createApp({
    data() {
        return {
            hearts : 3,
            categories : [
                {name: "Art", gotItRight: false, avatar:"🎨", questions: [
                    {ask: "What is art?", correctIndex:0, answer: ["Good", "Bad"]},
                    {ask: "Who painted Mona Lisa?", correctIndex:0, answer: ["Dali", "Davinci"]}
                ]},
                {name: "Science", gotItRight: false, avatar:"🧪", questions: []},
                {name: "Geography", gotItRight: false, avatar:"🌍", questions: []},
                {name: "History", gotItRight: false, avatar:"📚", questions: []},
                {name: "Entertainment", gotItRight: false, avatar:"🎥", questions: []}
            ]
        }
    },
    methods: {
        
    },
    computed: {},
    mounted() {
        if (isCanvasSupported){
            let ctx = document.getElementById("myCanvas").getContext('2d');
            ctx.fillStyle = color[i];
            ctx.strokeStyle = "black";
            ctx.lineWidth = 5;

            ctx.beginPath(); //clear out previous paths
            ctx.arc(150,150,0,Math.PI);
            ctx.lineTo(150,150);
            ctx.closePath();
            ctx.fill();
            ctx.fillRect(10,10,150,100);
        }
    }
}).mount('#app');