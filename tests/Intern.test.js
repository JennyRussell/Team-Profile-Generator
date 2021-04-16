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
        const name = "Jenny";
        const email = "jenny@gmail.com";
        //Act
        const intern = new Intern(name, email);
        //Assert
        expect(intern.email).toEqual('jenny@gmail.com')
    })

})

describe('Intern', () => {

    it('should return the email of the intern', () => {
        //Arrange
        const name = "Jenny";
        const email = "jenny@gmail.com";
        const id = "1";
        //Act
        const intern = new Intern(name, email, id);
        //Assert
        expect(intern.id).toEqual('1')
    })

})

describe('intern', () => {

    it('should return the role of the intern', () => {
        //Arrange
        const name = "Jenny";
        const email = "jenny@gmail.com";
        const id = "1";
        const school = "UC Riverside";

        const role = "Intern";
        //Act
        const intern = new Intern(name, email, id, school, role);
        //Assert
        expect(intern.role).toEqual('Intern')
    })

})

describe('intern', () => {

    it('should return the school of the intern', () => {
        //Arrange
        const name = "Jenny";
        const email = "jenny@gmail.com";
        const id = "1";
        const school = "UC Riverside";

        //Act
        const intern = new Intern(name, email, id, school);
        //Assert
        expect(intern.school).toEqual('UC Riverside')
    })

})