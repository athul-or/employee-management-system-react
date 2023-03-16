const express = require('express');
const server = express();
const cors = require('cors');
const logic = require('./services/logic')

//connection
server.use(cors({
    origin:'http://localhost:3000'
}))

server.use(express.json());


server.listen(8000,()=>{
    console.log("listening on port 8000");
})


//get all employess
server.get('/allemployees',(req,res)=>{
    logic.allEmployees().then(
        (result)=>{
            res.status(result.statusCode).json(result)
        }
    )
})

//add employee
server.post('/addemployee',(req,res)=>{
    logic.addEmployee(req.body.id,req.body.name,req.body.age,req.body.designation,req.body.salary).then(
        (result)=>{
            res.status(result.statusCode).json(result)
        }
    )
})

//delete employee
server.delete('/delete/:id',(req,res)=>{
    logic.deleteEmployees(req.params.id).then(
        (result)=>{
            res.status(result.statusCode).json(result)
        }
    )
})


//get an employee
server.get('/getemployee/:id',(req,res)=>{
    logic.getEmployee(req.params.id).then(
        (result)=>{
            res.status(result.statusCode).json(result)
        }
    )
})

//update

server.post('/updateemployee',(req,res)=>{
    logic.updateEmployee(req.body.id,req.body.name,req.body.age,req.body.designation,req.body.salary).then(
        (result)=>{
            res.status(result.statusCode).json(result)
        }
    )
})