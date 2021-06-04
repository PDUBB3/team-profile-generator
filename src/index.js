const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");

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

const generateHtml = () => {
  const constructCard = (employee) => {
    if (employee.getRole() === "Engineer") {
      return `<div class="card">
      <div class="card-header bg-primary text-white">
        <h2>${employee.name}</h2>
        <h4>${employee.getRole()}</h4>
      </div>
      <div class="card-body">
        <ul class="list-group">
          <li class="list-group-item">ID: ${employee.id}</li>
          <li class="list-group-item">
            Email: <a href="mailto:${employee.email}">${employee.email}</a>
          </li>
          <li class="list-group-item">
            Github:
            <a target="_blank" href="https://github.com/${employee.github}"
              >${employee.github}</a
            >
          </li>
        </ul>
      </div>
    </div>`;
    }

    if (employee.getRole() === "Intern") {
      return `<div class="card">
      <div class="card-header bg-primary text-white">
        <h2>${employee.name}</h2>
        <h4>${employee.getRole()}</h4>
      </div>
      <div class="card-body">
        <ul class="list-group">
          <li class="list-group-item">ID: ${employee.id}</li>
          <li class="list-group-item">
            Email: <a href="mailto:${employee.email}">${employee.email}</a>
          </li>
          <li class="list-group-item">School: ${employee.school}</li>
        </ul>
      </div>
    </div>
  </div>`;
    }

    if (employee.getRole() === "Manager") {
      return `<div class="card">
      <div class="card-header bg-primary text-white">
        <h2>${employee.name}</h2>
        <h4>${employee.getRole()}</h4>
      </div>
      <div class="card-body">
        <ul class="list-group">
          <li class="list-group-item">ID: ${employee.id}</li>
          <li class="list-group-item">
            Email: <a href="mailto:${employee.email}">${employee.email}</a>
          </li>
          <li class="list-group-item">Office Number: ${
            employee.officeNumber
          }</li>
        </ul>
      </div>
    </div>`;
    }
  };

  const cards = employees.map(constructCard);

  const html = `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x"
        crossorigin="anonymous"
      />
      <title>Team Profile Generator</title>
    </head>
    <body>
      <header class="p-3 text-center">
        <h1>Team Profile</h1>
      </header>
      <hr />
      <div class="d-flex container flex-wrap justify-content-between">
        ${cards.join("")}
      </div>
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-gtEjrD/SeCtmISkJkNUaaKMoLD0//ElJ19smozuHV6z3Iehds+3Ulb9Bn9Plx0x4"
        crossorigin="anonymous"
      ></script>
      <script
        src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js"
        integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p"
        crossorigin="anonymous"
      ></script>
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.min.js"
        integrity="sha384-Atwg2Pkwv9vp0ygtn1JAojH0nYbwNJLPhwyoVbhoPwBhjQPR5VtM2+xf0Uwh9KtT"
        crossorigin="anonymous"
      ></script>
    </body>
  </html>`;

  return html;
};

const writeToFile = (html) => {
  try {
    fs.writeFileSync(path.join(__dirname, "../dist/team.html"), html);
    console.log("html file generated successfully");
  } catch (err) {
    console.log(err);
  }
};

const init = async () => {
  await addManager();
  await addEmployees();

  const html = generateHtml();
  writeToFile(html);
};

init();
