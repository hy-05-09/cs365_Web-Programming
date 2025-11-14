var socket = io();

Vue.createApp({
    data() {
        return {
            dogOffset:0
        };
    },
    methods: {
        increaseDogOffset(){
            this.dogOffset++;
        },
        decreaseDogOffset(){
            this.dogOffset--;
        }
    },
    computed: {
        currentDogOffset() {
            return {
                left: this.dogOffset+"px"
            };
        }
    }
}).mount('#app');