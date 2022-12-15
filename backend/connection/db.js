require("dotenv").config();
const { Sequelize } = require("sequelize")
const sequelize = new Sequelize(process.env.HOST, process.env.USER, process.env.PASSWORD, {
    port:5432,
    host: 'localhost',
    dialect: 'postgres',
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    },
});

//checking for established connection
async function checkConnection() {
try{
    await sequelize.authenticate();
    console.log("Connection has been established successfully.")
    } catch(error) {
        console.error("Unable to connect to the database:", error);
    }
}

checkConnection()

module.exports = sequelize