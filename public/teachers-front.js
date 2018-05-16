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
app.getTeachers();