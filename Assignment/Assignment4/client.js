
Vue.createApp({
    data() {
        return {wolfPos : "left", goatPos : "left", cabbagePos: "left", boatPos:"left", buttonDisabled : false, message : "", goatGray:false, cabbageGray:false, success:false, fail:false};
    },
    methods: {
        moveWolf(){
            if (this.wolfPos == this.boatPos) {
                this.wolfPos = (this.wolfPos === "left") ? "right" : "left";
                this.boatPos = (this.boatPos === "left") ? "right" : "left";
                this.message = "";
            }
            else {
                this.message = "You can't move the wolf."
            }
            
        },
        moveGoat(){
            if (this.goatPos == this.boatPos) {
                this.goatPos = (this.goatPos === "left") ? "right" : "left";
                this.boatPos = (this.boatPos === "left") ? "right" : "left";
                this.message = "";
            }
            else {
                this.message = "You can't move the goat."
            }
        },
        moveCabbage(){
            if (this.cabbagePos == this.boatPos) {
                this.cabbagePos = (this.cabbagePos === "left") ? "right" : "left";
                this.boatPos = (this.boatPos === "left") ? "right" : "left";
                this.message = "";
            }
            else {
                this.message = "You can't move the cabbage."
            }
        },
        moveBoat(){
            this.boatPos = (this.boatPos === "left") ? "right" : "left";
            this.message = "";
        },
        reset(){
            this.wolfPos = "left";
            this.goatPos = "left";
            this.cabbagePos = "left";
            this.boatPos = "left";
            this.buttonDisabled = false;
            this.message = "";
            this.goatGray = false;
            this.cabbageGray = false;
            this.success = false;
            this.fail = false;
        },
        happyEnding(){
            this.buttonDisabled = true;
            this.message = "Mission complete!";
            this.success = true;
        },
        sadEnding(){
            this.buttonDisabled = true;
            this.fail = true;
        }
    },
    computed: {
        wolfLeft(){
            return this.wolfPos === "left"
        },
        goatLeft(){
            return this.goatPos === "left"
        },
        cabbageLeft(){
            return this.cabbagePos === "left"
        },
        boatLeft(){
            return this.boatPos === "left"
        },
        wolfRight(){
            return this.wolfPos === "right"
        },
        goatRight(){
            return this.goatPos === "right"
        },
        cabbageRight(){
            return this.cabbagePos === "right"
        },
        boatRight(){
            return this.boatPos === "right"
        }
    },
    watch: {
        boatPos(){
            if (this.wolfPos === this.goatPos && this.wolfPos !== this.boatPos) {
                this.sadEnding();
                this.goatGray = true;
                this.message = "Game Over : The wolf ate the goat!";
            }  
            else if (this.goatPos === this.cabbagePos && this.goatPos !== this.boatPos) {
                this.sadEnding();
                this.cabbageGray = true;
                this.message = "Game Over : The goat ate the cabbage!";
            } 
            if (this.wolfPos === "right" && this.goatPos === "right" && this.cabbagePos === "right") {
                this.happyEnding();
            } 
        }
    }
}).mount('#app');
