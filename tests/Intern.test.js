const Intern = require('../lib/Intern');

describe('Intern', () => {
    it('should return the name of the intern', () => {
        //Arrange
        const name = "Jenny";
        //Act
        const intern = new Intern(name);
        //Assert
        expect(intern.name).toEqual('Jenny')
    })

})

describe('Intern', () => {
    it('should return the id of the intern', () => {
        //Arrange
        const id = "1";
        const name = "Jenny";
        //Act
        const intern = new Intern(name, id);
        //Assert
        expect(intern.id).toEqual('1')
    })

})

describe('Intern', () => {

    it('should return the email of the intern', () => {
        //Arrange
        const id = "1";
        const name = "Jenny";
        const email = "jenny@gmail.com";
        //Act
        const intern = new Intern(name, id, email);
        //Assert
        expect(intern.email).toEqual('jenny@gmail.com')
    })

})

describe('intern', () => {

    it('should return the school of the intern', () => {
        //Arrange
        const id = "1";
        const name = "Jenny";
        const email = "jenny@gmail.com";
        const school = "UC Riverside";
        //Act
        const intern = new Intern(name, id, email, school);
        //Assert
        expect(intern.school).toEqual('UC Riverside')
    })

})