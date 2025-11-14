

let a = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let b = a.map(arg=>2*arg);
console.log(b);


let presidents = ["Washington, George","Adams, John","Jefferson, Thomas","Madison, James","Monroe, James","Adams, John Quincy","Jackson, Andrew",
    "Van Buren, Martin","Harrison, William Henry","Tyler, John","Polk, James","Taylor, Zachary","Fillmore, Millard","Pierce, Franklin","Buchanan, James",
    "Lincoln, Abraham","Johnson, Andrew","Grant, Ulysses S.","Hayes, Rutherford B.","Garfield, James","Arthur, Chester","Cleveland, Grover",
    "Harrison, Benjamin","Cleveland, Grover","McKinley, William","Roosevelt, Theodore","Taft, William H.","Wilson, Woodrow","Harding, Warren",
    "Coolidge, Calvin","Hoover, Herbert","Roosevelt, Franklin D.","Truman, Harry","Eisenhower, Dwight","Kennedy, John F.","Johnson, Lyndon",
    "Nixon, Richard","Ford, Gerald","Carter, Jimmy","Reagan, Ronald","Bush, George H.W.","Clinton, William J.","Bush, George W.","Obama, Barack",
    "Trump, Donald","Biden, Joe","Trump, Donald"];


let c = b.map(arg=>presidents[arg]);
console.log(c);


console.log(presidents.filter((name) => name.length >= 20));

console.log(presidents.filter((name, index) => index%2==0));

console.log(presidents.reduce((answer, name)=>answer+name[0], ""));

let result = presidents.filter( name => (name.length < 15 && name.includes("James"))).reduce( (result,value) => (result.push(value),result), []);
console.log(result);