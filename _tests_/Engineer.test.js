//Engineer Test JS
const Engineer = require("../lib/Engineer");

// Test for the Engineer class
describe('Engineer', () => {
  describe('constructor', () => {
    it('should create an instance of Engineer with a name, id, email, and github', () => {
      const engineer = new Engineer('John Doe', 123, 'jdoe@example.com', 'johndoe');

      expect(engineer.name).toBe('John Doe');
      expect(engineer.id).toBe(123);
      expect(engineer.email).toBe('jdoe@example.com');
      expect(engineer.github).toBe('johndoe');
    });
  });
});
