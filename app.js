const express = require("express");
const app = express();
const port = 1111;

app.use(express.json());

let studentInfo = [
  {
    id: 1,
    name: "John Doe",
    age: 20,
  },
  {
    id: 2,
    name: "Doe",
    age: 21,
  },
];
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.post(`/student`, (req, res) => {
  console.log(req.body); 
  const student = studentInfo.find(student => student.id === 2);
  res.send(student)
});
app.get("/getStudentById",(req,res)=>{


})
app.put("/ChangeStudent", (req, res) => {
  const { id, age,name } = req.body;
  const studentId = parseInt(id);
  const student = studentInfo.find((student) => student.id === studentId);
  student.age = age ;
  student.name = name;
  res.send(studentInfo);
});
app.delete("/DeleteStudent", (req, res) => {
  const { id } = req.body;
  const studentId = parseInt(id);
  const index = studentInfo.findIndex((student) => student.id === id);
  studentInfo.splice(index, 1);
  res.send(studentInfo);
});



app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
