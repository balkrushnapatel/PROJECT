const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const student = require('./Student');

const connectionString = "mongodb+srv://BalkrushnaPatel:061079bMp@cluster001.gsy4s.mongodb.net/Students"

mongoose.connect(connectionString).then(() => {
    console.log("connected with mongoDB")

    const app = express();
    app.use(bodyParser.urlencoded());


    app.get('/students', async (req, res) => {
        const ans = await student.find();
        res.send(ans);
    })

    app.get('/student/:rollno', async (req, res) => {
        const ans = await student.findOne({
            rollno: req.params.rollno
        });

        res.send(ans);
    })

    app.post('/students/add', async (req, res) => {
        stu = new student({ ...req.body });
        const ans = await stu.save();
        res.send(ans);
    })


    app.delete('/student/:rollno', async (req, res) => {
        const ans = await student.deleteOne({
            rollno: req.params.rollno
        });
        res.send(ans);
    })

    app.patch('/student/edit/:rollno', async (req, res) => {
        const stu = await student.findOne({
            rollno: req.params.rollno
        });
        stu.name = req.body.name;
        stu.rollno = req.body.rollno;
        stu.age = req.body.age;
        stu.email = req.body.email;
        const ans = await stu.save();
        res.send(ans);
    })

    app.listen(3001, () => {
        console.log("server start @ 3001");

    })

})