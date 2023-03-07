/**
 * Imports
 */
 const express = require('express');
 const app = express();
 const bp = require('body-parser');
 const cors = require('cors');
 const sequelize = require('./connectionBDD');
 const QuizzRoutes = require('./src/routes/QuizzRoutes');
 /**
  * Configurer l'app
  */

 app.use(cors());
 app.use(bp.json());
 
app.use('/quizz', QuizzRoutes)
 
 app.get("/", (req, res) =>{
   sequelize.sync();
    sequelize.authenticate().then(() => {
       console.log('Connection has been established successfully.');
      }).catch((error) => {
         console.error('Unable to connect to the database: ', error);
      });
      res.send("Bienvenue Jean-Christophe");
 })
 
 
 module.exports = app;