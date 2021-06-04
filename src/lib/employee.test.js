const Employee = require("./employee");
test("should return an instance of an Employee", () => {
  const employee = new Employee(1, "Bob", "bob@email.com");
  expect(employee).toBeInstanceOf(Employee);
});
test("should return an Employee with id, name and email", () => {
  const employee = new Employee(1, "Bob", "bob@email.com");
  expect(employee).toEqual({
    id: 1,
    name: "Bob",
    email: "bob@email.com",
  });
});
test("should return an Employee's id when getId is called", () => {
  const employee = new Employee(1, "Bob", "bob@email.com");
  const actual = employee.getId();
  expect(actual).toEqual(1);
});
test("should return an Employee's name when getName is called", () => {
  const employee = new Employee(1, "Bob", "bob@email.com");
  const actual = employee.getName();
  expect(actual).toEqual("Bob");
});
test("should return an Employee's email when getEmail is called", () => {
  const employee = new Employee(1, "Bob", "bob@email.com");
  const actual = employee.getEmail();
  expect(actual).toEqual("bob@email.com");
});
