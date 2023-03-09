//Employee Test JS
const Employee = require("../lib/Employee");

//Employee Tests for creating an employee object
Describe('Employee', () => {
    Describe('Employee Object Instance', () => {
        It('should create an object instance of Employee', () => {
        const employee = new Employee();
        expect(typeof(employee)).toBe('object');
        });

        It('should create an employee name', () => {
            const employee = new Employee('John Doe');
            expect(employee.name).toBe('John Doe');
        });

        It('should create an employee id', () => {
            const employee = new Employee('John Doe', 123);
            expect(employee.id).toBe(123);
        });

        It('should create an employee email', () => {
            const employee = new Employee('John Doe', 123, 'test@testemail.com');
            expect(employee.email).toBe('test@testemail.com');
        });

        It('should make a new employee object based on inputs', () => {
            const employee = new Employee('John Doe', 123, 'test@testemail.com', 'johndoe');
            expect(Employee).toBe('John Doe', 123, 'test@testemail.com', 'johndoe');
        });

        It('should create an employee role', () => {
            const employee = new Employee('John Doe', 123, 'test@testemail.com', 'johndoe', 'role');
            expect(employee.role).toBe('role');
        });
    });
});


