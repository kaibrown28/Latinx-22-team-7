require("dotenv").config();
const { Sequelize } = require("sequelize")
const sequelize = new Sequelize(process.env.DATABASE_URL)

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