const db = require("../models");
const Employee = db.employeevb;
const Op = db.Sequelize.Op;

// Create and Save a new Tutorial
exports.create = (req, res) => {
    if (!req.body.employeename) {
        res.status(400).send({
          message: "Content can not be empty!"
        });
        return;
    }

    // Create a Tutorial
    const employee = {
    employeename: req.body.employeename,
      employeedomain: req.body.employeedomain,
      employeesalary: req.body. employeesalary
    };
  
    // Save Tutorial in the database
    Employee.create(employee)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the employee deatils."
        });
      });
};

// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
    const employeename = req.query.employeename;
    var condition = employeename ? { employeename: { [Op.employeename]: `%${employeename}%` } } : null;
  
    Employee.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving employee details."
        });
      });
};

// Find a single Tutorial with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Employee.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Employee with id=" + id
        });
      });
};

// Update a Tutorial by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Employee.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Empolyee details was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Empolyee details with id=${id}. Maybe Emploee was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Empolyee details with id=" + id
        });
      });
};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Employee.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Empolyee details was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Empolyee details with id=${id}. Maybe Empolyee details was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Empolyee details with id=" + id
        });
      });
};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
    Employee.destroy({
        where: {},
        truncate: false
      })
        .then(nums => {
          res.send({ message: `${nums} Empolyee details were deleted successfully!` });
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while removing all Empolyee details."
          });
        });
};

// Find all published Tutorials
exports.findAllPublished = (req, res) => {
    Employee.findAll({ where: { published: true } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Empolyee details."
      });
    });
};