function convertToText(result){
    if (!result.ok) throw new Error("status: " + result.status); //Throw error if not status code 200 through 299.
    return result.text(); //returns the result as the next promise to the "then" below
}


Vue.createApp({
    data() {
        return {feedback:"", candidate:"", candidate2:"", password:""};
    },
    methods: {
        setData(data){this.feedback = data;}, //This 'data' parameter is the text data sent from the server, returned from the 'then' above.
        setError(err){this.feedback = "Error: " + err.message;},
        fetchNumCandidates() {
            //Makes a GET request to /numberOfCandidates
            fetch("/numberOfCandidates").then(convertToText).then(this.setData, this.setError);
        },
        recordVote() {
		let params = new URLSearchParams();
		params.append("candidate", this.candidate);
        //Makes a POST request to /vote
		fetch("/vote", {method: 'POST', body: params }).then(convertToText).then(this.setData, this.setError);
        },
        fetchVotesPerCandidates(){
            let params = new URLSearchParams();
		    params.append("candidate", this.candidate2);
            fetch("/candidateVotes?" + params).then(convertToText).then(this.setData, this.setError);
        },
        reset(){
            let params = new URLSearchParams();
		    params.append("password", this.password);
            fetch("/reset?" + params).then(convertToText).then(this.setData, this.setError);
        },
        fetchTotalVotes() {
            fetch("/totalVotes").then(convertToText).then(this.setData, this.setError);
        },
    },
    computed: {
        
    }
}).mount('#myApp');
