//Engineer Test JS
const Engineer = require("../lib/Engineer");

// Test for the Engineer class
describe('Engineer', () => {
  describe('Engineer Object Instance', () => {
      it('should create an object instance of Engineer', () => {
      const engineer = new Engineer();
      expect(typeof(engineer)).toBe('object');
      });

      it('should create an Engineer name', () => {
          const engineer = new Engineer('John Doe');
          expect(engineer.name).toBe('John Doe');
      });

      it('should create an Engineer id', () => {
          const engineer = new Engineer('John Doe', 123);
          expect(engineer.id).toBe(123);
      });

      it('should create an Engineer email', () => {
          const engineer = new Engineer('John Doe', 123, 'test@testemail.com');
          expect(engineer.email).toBe('test@testemail.com');
      });

      it('should create an Engineer github', () => {
        const engineer = new Engineer('John Doe', 123, 'test@testemail.com', 'github');
        expect(engineer.github).toBe('github');
      });

      it('should create an Engineer role', () => {
          const engineer = new Engineer('John Doe', 123, 'test@testemail.com', 'github', 'role');
          expect(engineer.getRole()).toBe('Engineer');
      });
  });
});
