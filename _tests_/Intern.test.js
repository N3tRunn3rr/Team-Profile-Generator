//Intern Test JS
const Intern = require("../lib/Intern");

// Test for the Intern class
describe('Intern', () => {
  describe('Intern Object Instance', () => {
      it('should create an object instance of Intern', () => {
      const intern = new Intern();
      expect(typeof(intern)).toBe('object');
      });

      it('should create an Intern name', () => {
          const intern = new Intern('John Doe');
          expect(intern.name).toBe('John Doe');
      });

      it('should create an Intern id', () => {
          const intern = new Intern('John Doe', 123);
          expect(intern.id).toBe(123);
      });

      it('should create an Intern email', () => {
          const intern = new Intern('John Doe', 123, 'test@testemail.com');
          expect(intern.email).toBe('test@testemail.com');
      });

      it('should create an Intern school', () => {
          const intern = new Intern('John Doe', 123, 'test@testemail.com', 'school');
          expect(intern.school).toBe('school');
      });

      it('should create an Intern role', () => {
          const intern = new Intern('John Doe', 123, 'test@testemail.com', 'school', 'role');
          expect(intern.getRole()).toBe('Intern');
      });
  });
});
