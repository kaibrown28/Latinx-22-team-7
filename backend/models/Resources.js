const sequelize = require("../connection/db")
const {DataTypes} = require("sequelize")

const Resources = sequelize.define("Resources", {
    resource: {type: DataTypes.STRING, allowNull: false, unique: false},
    type: {type: DataTypes.STRING, allowNull: false, unique: false},
    email: {type: DataTypes.STRING, allowNull: false},
    address: {type: DataTypes.STRING, allowNull: false},
    city: {type: DataTypes.TEXT, allowNull: false},
    state: {type: DataTypes.TEXT, allowNull: false},
    zipCode: {type: DataTypes.INTEGER, allowNull: false},
    pointOfContact: {type: DataTypes.STRING, allowNull: false},
    details: {type: DataTypes.STRING, allowNull: false},
    role: {type: DataTypes.STRING, allowNull: false, defaultValue: "resource"},
    }, {tableName: "resources", timestamps: true})

async function createTable(){
    await Resources.sync()
}

createTable()

module.exports = Resources