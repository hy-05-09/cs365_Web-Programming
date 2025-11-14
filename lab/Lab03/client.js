

Vue.createApp({
    data() {
        return {operand1: 5, operand2: 8};
    },
    methods: {
        isPositiveInteger(a) {
            return Number.isInteger(a) && (a >= 1);
        },
        isNonNegativeInteger(b){
            return Number.isInteger(b) && (b >= 0);
        }
    },
    computed: {
        op1Good() {
            return Number.isFinite(this.operand1);
        },
        op2Good() {
            return Number.isFinite(this.operand2);
        },
        factorial() {
            let ret = 1;
            for(let i = 1; i <= Math.min(this.operand1, 200); i++) {
                ret *= i;
            }
            console.log(ret);
            return ret;
        },
        addAll(){
            let sum = ((this.operand1)*(this.operand1+1))/2;
            return sum;
        }
    }
}).mount('#app');