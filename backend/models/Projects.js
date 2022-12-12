const sequelize = require("../connection/db")
const {DataTypes} = require("sequelize")

const Projects= sequelize.define("Projects", {
    username: {type: DataTypes.STRING, allowNull: false, unique: true},
    password: {type: DataTypes.STRING, allowNull: false},
    role: {type: DataTypes.STRING, allowNull: false, defaultValue: "general"}
    }, {tableName: "Projects", timestamps: true})

async function createTable(){
    await Projects.sync()
}

createTable()

module.exports = Projects