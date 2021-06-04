const inquirer = require("inquirer");

const Manager = require("./lib/manager");

const employees = [];

const addManager = async () => {
  const managerQuestions = [
    {
      name: "name",
      type: "input",
      message: "Please enter manager's name:",
    },
    {
      name: "email",
      type: "input",
      message: "Please enter manager's email address:",
    },
    {
      name: "id",
      type: "input",
      message: "Please enter manager's employee ID:",
    },
    {
      name: "officeNumber",
      type: "input",
      message: "Please enter manager's office number:",
    },
  ];

  const answers = await inquirer.prompt(managerQuestions);

  const manager = new Manager(
    answers.id,
    answers.name,
    answers.email,
    answers.officeNumber
  );

  employees.push(manager);
};

const addEmployees = async () => {};

const generateHtml = async () => {};

const writeToFile = async () => {};

const init = async () => {
  await addManager();
};

init();
