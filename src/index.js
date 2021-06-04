const inquirer = require("inquirer");

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
  console.log(answers);
};

const addEmployees = async () => {};

const generateHtml = async () => {};

const writeToFile = async () => {};

const init = async () => {
  await addManager();
};

init();
