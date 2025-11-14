
let a = ["dog", "cat", "mouse"];
// for(let i=0; i<a.length; i++){
//     a[i] = a[i] + ".jpg";
// }

let b = a.map(function(arg){
    return arg+".jpg";
});
b=a.map(arg=>arg+".jpg");

let c = [3, 9, 1, 8, 6];
let total = c.reduce((acc, item)=> acc+item, 0); 
// 총합 구하는 코드로 acc는 이전의 반환값을 뜻함. 최종 total 값에는 27 할당

console.log(b);


let d = [1,2,3];
let answer = d.reduce((prevAnswer, elementValue)=>elementValueq*elementValue+prevAnswer,0);
console.log(answer);

let e = ["I", "love", "you"];
answer = e.reduce((prevAnswer, elt)=>prevAnswer, "");
console.log(answer);

//Take the product of a bunch of numbers in an array.
let f = [4, 8, 11, 55, 22];
answer = f.reduce((prevAnswer, elt)=>prevAnswer*elt, 1);
console.log(answer);

// let g = [4.4, 5.5, 7.3, -2.3];
// let sum = g.reduce((prevAnswer, elementValue)=>elementValue+prevAnswer,0);
// let mean = sum / g.length;

function findAverage(g) { //finds the arithmetic mean of an array
    let sum = g.reduce((prevAnswer, elementValue)=>elementValue+prevAnswer,0);
    let mean = sum / g.length;
    return mean;
}

let g = [4.4, 5.5, 7.3, -2.3];
let mean = findAverage(g);
let variance = findAverage(g.map((arg)=> (arg-mean)*(arg-mean)));
console.assert.log(variance);

let h = [43, -3, 0, 13, 44, -9];
let posNums = h.filter((value) => value > 0);
console.log(posNums);

let i = [
    {name : "orange", color : "orange", quantity : 5},
    {name : "grapes", color : "red", quantity : 2},
    {name : "apples", color : "red", quantity : 15},
    {name : "bananas", color : "yellow", quantity : 19},
    {name : "kiwi", color : "brown", quantity : 55}
];

let result = i.filter((fruit)=>fruit.quantity>=10 && fruit.name.length>=5);
console.log(result);

let redFruit = i.filter((fruit)=>fruit.color==="red");
console.log(redFruit);