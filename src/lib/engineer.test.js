const Engineer = require("./engineer");
test("should return an instance of an Engineer", () => {
  const engineer = new Engineer(1, "Bob", "bob@email.com", "foo");
  expect(engineer).toBeInstanceOf(Engineer);
});
test("should return an Engineer with id, name, email and github", () => {
  const engineer = new Engineer(1, "Bob", "bob@email.com", "foo");
  expect(engineer).toEqual({
    id: 1,
    name: "Bob",
    email: "bob@email.com",
    github: "foo",
  });
});
test("should return an Engineer's github when getGithub is called", () => {
  const engineer = new Engineer(1, "Bob", "bob@email.com", "foo");
  const actual = engineer.getGithub();
  expect(actual).toEqual("foo");
});
test("should return an Engineer's role when getRole is called", () => {
  const engineer = new Engineer(1, "Bob", "bob@email.com", "foo");
  const actual = engineer.getRole();
  expect(actual).toEqual("Engineer");
});
