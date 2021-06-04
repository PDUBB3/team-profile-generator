const Intern = require("./intern");
test("should return an instance of an Intern", () => {
  const intern = new Intern(1, "Bob", "bob@email.com", "foo");
  expect(intern).toBeInstanceOf(Intern);
});
test("should return an Intern with id, name, email and school", () => {
  const intern = new Intern(1, "Bob", "bob@email.com", "foo");
  expect(intern).toEqual({
    id: 1,
    name: "Bob",
    email: "bob@email.com",
    school: "foo",
  });
});
test("should return an Intern's school when getSchool is called", () => {
  const intern = new Intern(1, "Bob", "bob@email.com", "foo");
  const actual = intern.getSchool();
  expect(actual).toEqual("foo");
});
test("should return an Intern's role when getRole is called", () => {
  const intern = new Intern(1, "Bob", "bob@email.com", "foo");
  const actual = intern.getRole();
  expect(actual).toEqual("Intern");
});
