<<<<<<< HEAD
let app = new Vue({
    el: "#Batches",
    data: {
        batches: []
    },
    methods: {
        getBatches: function () {
            axios.get('http://localhost:3000/batches')
                .then(responce => {
                    this.batches = responce.data
                }).catch(err => {
                    console.log('cannot retrieve batches');
                })
        }
    }
});
=======
let app = new Vue({
    el: "#Batches",
    data: {
        batches: []
    },
    methods: {
        getBatches: function () {
            axios.get('http://localhost:3000/batches')
                .then(responce => {
                    this.batches = responce.data
                }).catch(err => {
                    console.log('cannot retrieve batches');
                })
        }
    }
});
>>>>>>> ef80c79c97ddc7c6d9b08ec7b18815bd866dc47b
app.getBatches();