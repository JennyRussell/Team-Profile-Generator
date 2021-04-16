const Manager = require('../lib/Manager');

describe('Manager', () => {
    it('should return the name of the manager', () => {
        //Arrange
        const name = "Jenny";
        //Act
        const manager = new Manager(name);
        //Assert
        expect(manager.name).toEqual('Jenny')
    })

})

describe('Manager', () => {
    it('should return the id of the manager', () => {
        //Arrange
        const id = "1";
        const name = "Jenny";
        //Act
        const manager = new Manager(name, id);
        //Assert
        expect(manager.id).toEqual('1')
    })

})

describe('Manager', () => {

    it('should return the email of the manager', () => {
        //Arrange
        const id = "1";
        const name = "Jenny";
        const email = "jenny@gmail.com";
        //Act
        const manager = new Manager(name, id, email);
        //Assert
        expect(manager.email).toEqual('jenny@gmail.com')
    })

})

describe('Manager', () => {

    it('should return the office number of the manager', () => {
        //Arrange
        const id = "1";
        const name = "Jenny";
        const email = "jenny@gmail.com";
        const officeNumber = "555-555-5555";
        //Act
        const manager = new Manager(name, id, email, officeNumber);
        //Assert
        expect(manager.officeNumber).toEqual('555-555-5555')
    })

})