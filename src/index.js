const inquirer = require("inquirer");

const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");

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

const addEngineer = async () => {
  const engineerQuestions = [
    {
      name: "name",
      type: "input",
      message: "Please enter engineer's name:",
    },
    {
      name: "email",
      type: "input",
      message: "Please enter engineer's email address:",
    },
    {
      name: "id",
      type: "input",
      message: "Please enter engineer's employee ID:",
    },
    {
      name: "github",
      type: "input",
      message: "Please enter engineer's github username:",
    },
  ];

  const answers = await inquirer.prompt(engineerQuestions);

  const engineer = new Engineer(
    answers.id,
    answers.name,
    answers.email,
    answers.github
  );

  employees.push(engineer);
};

const addIntern = async () => {
  const internQuestions = [
    {
      name: "name",
      type: "input",
      message: "Please enter intern's name:",
    },
    {
      name: "email",
      type: "input",
      message: "Please enter intern's email address:",
    },
    {
      name: "id",
      type: "input",
      message: "Please enter intern's employee ID:",
    },
    {
      name: "school",
      type: "input",
      message: "Please enter intern's school:",
    },
  ];

  const answers = await inquirer.prompt(internQuestions);

  const intern = new Intern(
    answers.id,
    answers.name,
    answers.email,
    answers.school
  );

  employees.push(intern);
};

const addEmployees = async () => {
  let inProgress = true;
  while (inProgress) {
    const employeeQuestion = {
      name: "employee",
      type: "list",
      choices: ["Engineer", "Intern", "Exit"],
      message: "Please select the employee you would like to add:",
    };
    const answers = await inquirer.prompt(employeeQuestion);

    if (answers.employee === "Engineer") {
      await addEngineer();
    }

    if (answers.employee === "Intern") {
      await addIntern();
    }

    if (answers.employee === "Exit") {
      inProgress = false;
    }
  }
};

const generateHtml = async () => {};

const writeToFile = async () => {};

const init = async () => {
  await addManager();
  await addEmployees();
  console.log(employees);
};

init();
