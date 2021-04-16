const Engineer = require('../lib/Engineer');

describe('Engineer', () => {
    it('should return the name of the engineer', () => {
        //Arrange
        const name = "Jenny";
        //Act
        const engineer = new Engineer(name);
        //Assert
        expect(engineer.name).toEqual('Jenny')
    })

})

describe('Engineer', () => {
    it('should return the id of the engineer', () => {
        //Arrange
        const id = "1";
        const name = "Jenny";
        //Act
        const engineer = new Engineer(name, id);
        //Assert
        expect(engineer.id).toEqual('1')
    })

})

describe('Engineer', () => {

    it('should return the email of the engineer', () => {
        //Arrange
        const id = "1";
        const name = "Jenny";
        const email = "jenny@gmail.com";
        //Act
        const engineer = new Engineer(name, id, email);
        //Assert
        expect(engineer.email).toEqual('jenny@gmail.com')
    })

})

describe('Engineer', () => {

    it('should return the github of the engineer', () => {
        //Arrange
        const id = "1";
        const name = "Jenny";
        const email = "jenny@gmail.com";
        const github = "JennyRussell";
        //Act
        const engineer = new Engineer(name, id, email, github);
        //Assert
        expect(engineer.github).toEqual('JennyRussell')
    })

})