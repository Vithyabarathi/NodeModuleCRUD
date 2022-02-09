module.exports = app => {
    const employeevb = require("../controllers/employee.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", employeevb.create);
  
    // Retrieve all Tutorials
    router.get("/", employeevb.findAll);
  
    // Retrieve all published Tutorials
    router.get("/published", employeevb.findAllPublished);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", employeevb.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", employeevb.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", employeevb.delete);
  
    // Delete all Tutorials
    router.delete("/", employeevb.deleteAll);
  
    app.use('/api/employee', router);
  };