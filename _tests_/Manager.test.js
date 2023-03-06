//Manager test JS
const Manager = require("../lib/Manager");

// Test for the Manager class
describe('Manager', () => {
    describe('constructor', () => {
      it('should create an instance of manager with a name, id, email, and office number', () => {
        const manager = new Intern('Jane Doe', 456, 'jane@example.com', 123);
  
        expect(manager.name).toBe('Jane Doe');
        expect(manager.id).toBe(456);
        expect(manager.email).toBe('jane@example.com');
        expect(manager.officeNumber).toBe(123);
      });
    });
  });
  