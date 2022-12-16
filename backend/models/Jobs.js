const sequelize = require("../connection/db")
const {DataTypes} = require("sequelize")

const Jobs = sequelize.define("Jobs", {
    job: {type: DataTypes.STRING, allowNull: false, unique: false},
    type: {type: DataTypes.STRING, allowNull: false, unique: false},
    pointOfContact: {type: DataTypes.STRING, allowNull: false},
    details: {type: DataTypes.STRING, allowNull: false},
    role: {type: DataTypes.STRING, allowNull: false, defaultValue: "general"}
    }, {tableName: "jobs", timestamps: true})

async function createTable(){
    await Jobs.sync()
}

createTable()

module.exports = Jobs


// -- CREATE TABLE jobs(
//     --     job_id SERIAL PRIMARY KEY,
//     --     description VARCHAR(255),
//     --     pointOfContact VARCHAR(50),
//     --     skillsNeeded VARCHAR(50),
//     -- );