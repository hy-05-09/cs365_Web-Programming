
let person = {
    age: 46,
    name: "Mike",
    print: function() {console.log(this.name);},
    hobbies : {
        fencing: "good",
        golf: "Good, too"
    }
}

Vue.createApp({
    data: function() {
        //Define and return any reactive variables for our web page
        return {
            message: "Hello world",
            theURL: "index.html",
            myObjects: [
                 {name: "Moe", gpa: 4.0},
                 {name: "Larry", gpa: 3.0},
                 {name: "Curly", gpa: 2.0}
            ],
            count: 0
        }
    },
    methods: {
        changeTheText(){
            this.message = "CS 365 is the BEST!";
        }
    },
    computed: {}
}).mount('#app');