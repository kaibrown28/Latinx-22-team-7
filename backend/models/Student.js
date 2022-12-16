const sequelize = require("../connection/db")
const {DataTypes} = require("sequelize")

const Students = sequelize.define("Student", {
    firstName: {type: DataTypes.STRING, allowNull: false, unique: true},
    lastName: {type: DataTypes.STRING, allowNull: false, unique: true},
    email: {type: DataTypes.STRING, allowNull: false},
    image: {type: DataTypes.STRING, allowNull: true},
    gender: {type: DataTypes.BOOLEAN},
    age: {type: DataTypes.INTEGER, allowNull: false},
    email: {type: DataTypes.STRING, allowNull: false},
    phone: {type: DataTypes.INTEGER, allowNull: true},
    school: {type: DataTypes.STRING, allowNull: false},
    schoolWebsite: {type: DataTypes.STRING, allowNull: false},
    interests: {type: DataTypes.STRING, allowNull: false},
    hasParticipated: {type: DataTypes.STRING, allowNull: false},
    awards: {type: DataTypes.STRING, allowNull: false},
    income: {type: DataTypes.INTEGER, allowNull: true},
    essay: {type: DataTypes.TEXT, allowNull: true},
    aboutMe: {type: DataTypes.TEXT, allowNull: false},
    role: {type: DataTypes.STRING, allowNull: false, defaultValue: "student"},
    }, {tableName: "students", timestamps: true})

async function createTable(){
    await Students.sync()
}

createTable()

module.exports = Students



// -- CREATE TABLE student(
//     --     student_id SERIAL PRIMARY KEY,
//     --     name VARCHAR (50),
//     --     image VARCHAR(500),
//     --     email VARCHAR(50),
//     --     gender boolean NULL,
//     --     age int,
//     --     ethnicity text,
//     --     phone int,
//     --     school VARCHAR(50),
//     --     schoolWebsite VARCHAR(50),
//     --     interests VARCHAR(255),
//     --     hasParticipated VARCHAR(255),
//     --     awards VARCHAR(255),
//     --     income VARCHAR(255),
//     --     essay varchar(500),
//     --     skills VARCHAR(255),
//     --     aboutMe VARCHAR(255) 
//     -- );