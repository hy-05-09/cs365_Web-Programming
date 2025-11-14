

let myApp = Vue.createApp({
    data() {
		return {cup3: 0, cup5: 0, moveList:[]};
    },
    methods: {
        fill3: function(event) {
            this.moveList.push({text: "vat → 3", id: Symbol()});
			this.cup3=3;
		},
        fill5: function(event) {
            this.moveList.push({text: "vat → 5", id: Symbol()});
			this.cup5=5;
		},
        dump3: function(event) {
            this.moveList.push({text: "3 → vat", id: Symbol()});
			this.cup3=0;
		},
        dump5: function(event) {
            this.moveList.push({text: "5 → vat", id: Symbol()});
			this.cup5=0;
		},
        pour3To5: function(event) {
            this.moveList.push({text: "3 → 5", id: Symbol()});
			if (this.cup3!=0){
                if (this.cup5!=5){
                    if (this.cup3+this.cup5<=5){
                        this.cup5+=this.cup3;
                        this.cup3=0;
                    }
                    else{
                        let val = this.cup3 + this.cup5;
                        this.cup5=5;
                        this.cup3=val-5;
                    }
                }
            }
		},
        pour5To3: function(event) {
            this.moveList.push({text: "5 → 3", id: Symbol()});
			if (this.cup5!=0){
                if (this.cup3!=3){
                    if (this.cup3+this.cup5<=3){
                        this.cup3+=this.cup5;
                        this.cup5=0;
                    }
                    else{
                        let val = this.cup3 + this.cup5;
                        this.cup3=3;
                        this.cup5=val-3;
                    }
                }
            }
		},
        restart: function(event) {
            location.reload();
		},
    },
    computed: {
        message : function(){
            if(this.cup3==0 && this.cup5==0){
                return "Welcome!";
            }
            else if(this.cup5 ==4){
                return "Congratulations!"
            }
        }
    }
}).mount('#app');