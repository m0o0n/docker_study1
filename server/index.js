const PORT = 5000
const express = require('express')
const cors = require('cors')
const sequelize = require('./db')
const models = require('./models/index')
const errorHandler= require('./middleware/errorHandlingMiddleware')
const router = require('./routes/index')


const app = express()
app.use(cors())
app.use(express.json())
app.use('/api', router)
app.use(errorHandler)


const initConnectionDB = async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync({
          force: true
        })
        console.log('Connection has been established successfully.');
        app.listen(PORT, ()=>{
            console.log(`Server has been started on port ${PORT}`)
        })
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
}

initConnectionDB()
