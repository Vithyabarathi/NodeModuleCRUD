module.exports = {
    HOST: "100.72.130.5",
   
    USER: "TrainingUsr",
    PASSWORD: "Tr@ininGU$r@#321",
    DB: "Training",
    dialect: "mssql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };