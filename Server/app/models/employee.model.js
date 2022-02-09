module.exports = (sequelize, Sequelize) => {
    const Employee = sequelize.define("employeevb", {
      
      employeename: {
        type: Sequelize.STRING
      },
      employeedomain: {
        type: Sequelize.STRING
      },
      employeesalary: {
        type: Sequelize.INTEGER
      }
     
    },
    {

      timestamps: false

    });
    
  
    return Employee;
  };