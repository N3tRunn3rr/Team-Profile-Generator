//Manager test JS
const Manager = require("../lib/Manager");

// Test for the Manager class
describe('Manager', () => {
  describe('Manager Object Instance', () => {
      it('should create an object instance of Manager', () => {
        const manager = new Manager();
        expect(typeof(manager)).toBe('object');
      });

      it('should create a manager name', () => {
          const manager = new Manager('John Doe');
          expect(manager.name).toBe('John Doe');
      });

      it('should create a manager id', () => {
          const manager = new Manager('John Doe', 123);
          expect(manager.id).toBe(123);
      });

      it('should create a manager email', () => {
          const manager = new Manager('John Doe', 123, 'test@testemail.com');
          expect(manager.email).toBe('test@testemail.com');
      });

      it('should create a manager office number', () => {
        const manager = new Manager('John Doe', 123, 'test@testemail.com', '111-111-1111');
        expect(manager.officeNumber).toBe('111-111-1111');
      });

      it('should create a manager role', () => {
          const manager = new Manager('John Doe', 123, 'test@testemail.com', '111-111-1111', 'role');
          expect(manager.getRole()).toBe('Manager');
      });
  });
});
  