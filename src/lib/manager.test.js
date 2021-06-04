const Manager = require("./manager");
test("should return an instance of an Manager", () => {
  const manager = new Manager(1, "Bob", "bob@email.com", 456);
  expect(manager).toBeInstanceOf(Manager);
});
test("should return a Manager with id, name, email and officeNumber", () => {
  const manager = new Manager(1, "Bob", "bob@email.com", 456);
  expect(manager).toEqual({
    id: 1,
    name: "Bob",
    email: "bob@email.com",
    officeNumber: 456,
  });
});
