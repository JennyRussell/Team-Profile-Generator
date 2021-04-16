const Employee = require('./Employee.js');

class Engineer extends Employee {
    constructor(name, email, id, github, role) {
        super(name, email, id);
        this.github = github;

        this.role = role;

    }
    getGithub() {
        return this.github;
    }
    getRole() {
        return role = "Engineer";
    }




}

module.exports = Engineer;