const Employee = require('./Employee.js');

class Manager extends Employee {
    constructor(name, email, id, officeNumber, role) {
        super(name, email, id);
        this.officeNumber = officeNumber;
        this.role = role;
    }
    getOfficeNumber() {
        return this.officeNumber;
    }
    getRole() {
        return role = "Manager";
    }



}

module.exports = Manager;