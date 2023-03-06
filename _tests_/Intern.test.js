//Intern Test JS
const Intern = require("../lib/Intern");

// Test for the Intern class
describe('Intern', () => {
  describe('constructor', () => {
    it('should create an instance of Intern with a name, id, email, and school', () => {
      const intern = new Intern('Jane Doe', 456, 'jane@example.com', 'University of Test');

      expect(intern.name).toBe('Jane Doe');
      expect(intern.id).toBe(456);
      expect(intern.email).toBe('jane@example.com');
      expect(intern.school).toBe('University of Test');
    });
  });
});
