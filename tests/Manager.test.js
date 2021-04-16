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
    it('should return the email of the manager', () => {
        //Arrange
        const name = "Jenny";
        const email = "jenny@gmail.com";

        //Act
        const manager = new Manager(name, email);
        //Assert
        expect(manager.email).toEqual('jenny@gmail.com')
    })

})
describe('Manager', () => {

    it('should return the id of the manager', () => {
        //Arrange
        const name = "Jenny";
        const email = "jenny@gmail.com";
        const id = "1";


        //Act
        const manager = new Manager(name, email, id);
        //Assert
        expect(manager.id).toEqual('1')
    })

})

describe('Manager', () => {

    it('should return the role of the manager', () => {
        //Arrange
        const name = "Jenny";
        const email = "jenny@gmail.com";
        const id = "1";
        const officeNumber = "555-555-5555";
        const role = "Manager";
        //Act
        const manager = new Manager(name, email, id, officeNumber, role);
        //Assert
        expect(manager.role).toEqual('Manager')
    })

})

describe('Manager', () => {

    it('should return the office number of the manager', () => {
        //Arrange
        const name = "Jenny";
        const email = "jenny@gmail.com";
        const id = "1";
        const officeNumber = "555-555-5555";
        //Act
        const manager = new Manager(name, email, id, officeNumber);
        //Assert
        expect(manager.officeNumber).toEqual('555-555-5555')
    })

})