const sequelize = require('../../connectionBDD');
const DataTypes = require('sequelize');


const QuizzModel = sequelize.define("quizz", {
    name: DataTypes.STRING
});

  
  
module.exports = QuizzModel;