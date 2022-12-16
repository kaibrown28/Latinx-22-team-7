const sequelize = require("../connection/db")
const {DataTypes} = require("sequelize")

const User = sequelize.define("User", {
    username: {type: DataTypes.STRING, allowNull: false, unique: true},
    password: {type: DataTypes.STRING, allowNull: false},
    role: {type: DataTypes.STRING, allowNull: false, defaultValue: "general"}
    }, {tableName: "users", timestamps: true})

async function createTable(){
    await User.sync()
}

createTable()

module.exports = User