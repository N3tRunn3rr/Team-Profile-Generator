//Engineer Test JS
const Engineer = require("../lib/Engineer");

describe('Engineer', () => {
    describe('Initialization', () => {
        it('should create an object with a name, id, email, and github if provided with valid arguments', () => {
            const newEngineer = new Engineer('Jon', id, email, github);
            
            expect(newEngineer.name).toEqual('John');
            expect(newEngineer.id).toEqual(1);
            expect(newEngineer.email).toEqual('email');
            expect(newEngineer.github).toEqual('testGithub');
        })
    })
});