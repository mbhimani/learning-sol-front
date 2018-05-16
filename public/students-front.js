<<<<<<< HEAD
let app = new Vue({
    el: "#students",
    data: {
        studentname: "",
        students: [],
        studentDetails: false,
        enrollments: [],
        studentToDisplay: {},
        batchName: ""
    },
    methods: {
        getStudents: function () {
            axios.get('http://localhost:3000/students')
                .then(responce => {
                    this.students = responce.data
                }).catch(err => {
                    console.log('cannot retrieve students');
                })
        },
        addStudent: function () {
            axios.post('http://localhost:3000/students', {
                name: this.studentname
            }).then(() => {
                this.getStudents();
                this.studentname = '';
            })
        },
        getBatch: function() {
            axios.get('http://localhost:3000/batches')
            .then(responce => {
                this.enrollments = responce.data
            }).catch((err) => {
                console.log(err)
            })
        },
        showDetail: function(id) {
            this.studentDetails = true;
            axios.get('/students/'+id)
                .then(responce => {
                    this.studentToDisplay = responce.data
                }).catch(err => {
                    console.log(err)
                })
        },
        addEnrollment: function(batchId) {
            bId = this.enrollments.filter(item => item.name === this.batchName)[0].id
            axios.post('http://localhost:3000/students/enroll', {
                studentId: this.studentToDisplay.id,
                batchId: bId
            })
        }
    }
});
app.getStudents();
=======
let app = new Vue({
    el: "#students",
    data: {
        studentname: "",
        students: [],
        studentDetails: false,
        enrollments: [],
        studentToDisplay: {},
        batchName: ""
    },
    methods: {
        getStudents: function () {
            axios.get('http://localhost:3000/students')
                .then(responce => {
                    this.students = responce.data
                }).catch(err => {
                    console.log('cannot retrieve students');
                })
        },
        addStudent: function () {
            axios.post('http://localhost:3000/students', {
                name: this.studentname
            }).then(() => {
                this.getStudents();
                this.studentname = '';
            })
        },
        getBatch: function() {
            axios.get('http://localhost:3000/batches')
            .then(responce => {
                this.enrollments = responce.data
            }).catch((err) => {
                console.log(err)
            })
        },
        showDetail: function(id) {
            this.studentDetails = true;
            axios.get('/students/'+id)
                .then(responce => {
                    this.studentToDisplay = responce.data
                }).catch(err => {
                    console.log(err)
                })
        },
        addEnrollment: function(batchId) {
            bId = this.enrollments.filter(item => item.name === this.batchName)[0].id
            axios.post('http://localhost:3000/students/enroll', {
                studentId: this.studentToDisplay.id,
                batchId: bId
            })
        }
    }
});
app.getStudents();
>>>>>>> ef80c79c97ddc7c6d9b08ec7b18815bd866dc47b
app.getBatch();