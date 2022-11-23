const { response } = require('express');

//creating the pgbouncer pool to connect to POSTGRES database
const Pool = require('pg').Pool
const pool = new Pool({
    user: process.env.user,
    host: process.env.host,
    database: process.env.db,
    password:process.env.password,
    port: process.env.port
});

// //get all project admins
// const getStudent = (req,res) => {
//     pool.query('SELECT * FROM students ORDER BY id ASC', (error, results) => {
//         if (error){
//             throw error
//         }
//         res.status(200).json(results.rows)
//     })
// };
// //get a singular project admin
// const getStudentById = (req,res) => {
//     const id = parseInt(req.params.id)

//     pool.query('SELECT * from students WHERE id = $1', [id], (error,results) => {
//         if (error) {
//             throw error
//         }
//         res.status(200).json(results.rows)
//     })
// };

// //create a project admin
// const CreateStudent = (req,res) => {
//     const {email, name, lookingforvol, phone, projects} = req.body

//     pool.query('INSERT INTO students (email, name, lookingforvol, phone, projects) VALUES ($1, $2, $3, $4, $5)', [email, name, lookingforvol, phone, projects], (error, results) =>{
//         if (error) {
//             throw error
//         }
//         res.status(201).send(`User added.`)
//     })
// };

// //update project administrator
// const updateStudent = (req,res) => {
//     const id = parseInt(req.params.id)
//     const {email, name, lookingforvol, phone, projects} = req.body

//     pool.query(
//         'UPDATE students SET email = $1, name = $2, lookingforvol = $3, phone = $4, projects = $5 WHERE id = $6', 
//         [email, name, lookingforvol, phone, projects, id],
//         (error, results) => {
//             if (error) {
//                 throw error
//             }
//             res.status(200).send(`User modified with id: ${id}`)
//         }
//     )
// };

// //Delete a project administrator
// const deleteStudent = (req,res) =>{
//     const id = parseInt(req.params.id)

//     pool.query('DELETE FROM students WHERE id = $1', [id], (error, results) =>{
//         if(error){
//             throw error
//         }
//         res.status(200).send(`User deleted with ID: ${id}`)
//     })
// }

// //exporting CRUD for students table

// module.exports = {
//     getStudent,
//     getStudentById,
//     CreateStudent,
//     updateStudent,
//     deleteStudent,
// }