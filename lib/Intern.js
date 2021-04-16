const Employee = require('./Employee.js');

class Intern extends Employee {
    constructor(name, email, id, school, role) {
        super(name, email, id);
        this.school = school;
        this.role = role;
    }

    getSchool() {
        return this.school;
    }
    getRole() {
        return role = "Intern";
    }
}

module.exports = Intern;