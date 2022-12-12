const sequelize = require("../connection/db")
const {DataTypes} = require("sequelize")

const Company = sequelize.define("Company", {
    companyname: {type: DataTypes.STRING, allowNull: false, unique: true},
    industry: {type: DataTypes.STRING, allowNull: false, unique: false},
    email: {type: DataTypes.STRING, allowNull: false},
    address: {type: DataTypes.STRING, allowNull: false},
    city: {type: DataTypes.TEXT, allowNull: false},
    state: {type: DataTypes.TEXT, allowNull: false},
    zipCode: {type: DataTypes.INTEGER, allowNull: false},
    details: {type: DataTypes.STRING, allowNull: false},
    role: {type: DataTypes.STRING, allowNull: false, defaultValue: "general"}
    }, {tableName: "Companies", timestamps: true})

async function createTable(){
    await Company.sync()
}

createTable()

module.exports = Company


// -- CREATE TABLE company(
// --     company_id SERIAL PRIMARY KEY,
// --     website VARCHAR(50)
// --     country text,
// --     usState text,
// --     city text,
// --     zipCode text,
// --     address VARCHAR(100),
// --     expertise VARCHAR(255),
// --     description VARCHAR(255),
// --     hasOpportunities boolean NULL,
// --     rating int,
// -- );