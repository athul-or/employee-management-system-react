const db = require('./db');

//get all employees

const allEmployees = () => {
    return db.Employee.find().then(
        (result)=>{
            if(result){
                return{
                    statusCode:200,
                    employees:result
                }
            }
            else{
                return{
                    statusCode:404,
                    message:"Employess not found"
                }
            }
        }
    )
}

//add employees

const addEmployee = (id,name,age,designation,salary) => {
    return db.Employee.findOne({id}).then(
        (result)=>{
            if(result){
                return{
                    statusCode:401,
                    message:"Employee already exists!..."
                }
            }
            else{
                const newEmployee = new db.Employee({id,name,age,designation,salary})
                newEmployee.save()
                return{
                    statusCode:200,
                    message:"Employee added successfully.."
                }
            }
        }
    )
}

// delete employees 

const deleteEmployees = (id) => {
    return db.Employee.deleteOne({id}).then(
        (result)=>{
            if(result){
                return{
                    statusCode:200,
                    message:"Deleted Successfully"
                }
            }
            else{
                return{
                    statusCode:404,
                    message:"No Data Found"
                }
            }
        }
    )
}


const getEmployee = (id) => {
    return db.Employee.findOne({id}).then(
        (result)=>{
            if(result){
                return{
                    statusCode:200,
                    employee:result
                }
            }
            else{
                return{
                    statusCode:404,
                    message:"No Data Found"
                }
            }
        }
    )
}

//update


const updateEmployee = (id,name,age,designation,salary) => {
    return db.Employee.findOne({id}).then(
        (result)=>{
            if(result){
                 result.id = id;
                 result.name = name;
                 result.age = age;
                 result.designation = designation;
                 result.salary = salary;
                 result.save();

                return{
                    statusCode:200,
                    message:"Updated Successfully"
                }
            }
            else{
                return{
                    statusCode:404,
                    message:"No Data Found"
                }
            }
        }
    )
}



module.exports= {
    allEmployees,
    addEmployee,
    deleteEmployees,
    getEmployee,
    updateEmployee
}