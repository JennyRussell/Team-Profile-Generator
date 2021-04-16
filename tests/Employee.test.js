const Employee = require('../lib/employee');



describe('Employee', () => {
    it('should return the name of the employee', () => {
        //Arrange
        const name = "Jenny";
        //Act
        const employee = new Employee(name);
        //Assert
        expect(employee.name).toEqual('Jenny')
    })

})

describe('Employee', () => {
    it('should return the id of the employee', () => {
        //Arrange
        const id = "1";
        const name = "Jenny";
        //Act
        const employee = new Employee(name, id);
        //Assert
        expect(employee.id).toEqual('1')
    })

})

describe('Employee', () => {

    it('should return the email of the employee', () => {
        //Arrange
        const id = "1";
        const name = "Jenny";
        const email = "jenny@gmail.com";
        //Act
        const employee = new Employee(name, id, email);
        //Assert
        expect(employee.email).toEqual('jenny@gmail.com')
    })

})