//Employee Test JS
const Employee = require("../lib/Employee");

//Employee Tests for creating an employee object
describe('Employee', () => {
    describe('Employee Object Instance', () => {
        it('should create an object instance of Employee', () => {
        const employee = new Employee();
        expect(typeof(employee)).toBe('object');
        });

        it('should create an employee name', () => {
            const employee = new Employee('John Doe');
            expect(employee.name).toBe('John Doe');
        });

        it('should create an employee id', () => {
            const employee = new Employee('John Doe', 123);
            expect(employee.id).toBe(123);
        });

        it('should create an employee email', () => {
            const employee = new Employee('John Doe', 123, 'test@testemail.com');
            expect(employee.email).toBe('test@testemail.com');
        });

        it('should create an employee role', () => {
            const employee = new Employee('John Doe', 123, 'test@testemail.com', 'johndoe', 'role');
            expect(employee.getRole()).toBe('Employee');
        });
    });
});


