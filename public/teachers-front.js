<<<<<<< HEAD
let app = new Vue({
    el: "#teachers",
    data: {
        teachername: "",
        teachers: []
    },
    methods: {
        getTeachers: function () {
            axios.get('http://localhost:3000/teachers')
                .then(responce => {
                    this.teachers = responce.data
                }).catch(err => {
                    console.log('cannot retrieve teachers');
                })
        },
        addTeacher: function () {
            axios.post('http://localhost:3000/teachers', {
                name: this.teachername
            }).then(() => {
                this.getTeachers();
                this.teachername = '';
            })
        }
    }
});
=======
let app = new Vue({
    el: "#teachers",
    data: {
        teachername: "",
        teachers: []
    },
    methods: {
        getTeachers: function () {
            axios.get('http://localhost:3000/teachers')
                .then(responce => {
                    this.teachers = responce.data
                }).catch(err => {
                    console.log('cannot retrieve teachers');
                })
        },
        addTeacher: function () {
            axios.post('http://localhost:3000/teachers', {
                name: this.teachername
            }).then(() => {
                this.getTeachers();
                this.teachername = '';
            })
        }
    }
});
>>>>>>> ef80c79c97ddc7c6d9b08ec7b18815bd866dc47b
app.getTeachers();