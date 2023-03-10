const inquirer = require('inquirer');
const fs = require('fs');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
// const generateHTML = require('./src/helper');
// const Employee = require('./lib/Employee');
const employees = [];

//TODO: get output to display in html file. only console logs the array of objects right now

//node index.js runs the first question but errors out after you give it a name

function init() {
        return newManager();
};

function newEmployee() {
    inquirer.prompt([
    {
        type: 'list',
        name: 'role',
        message: 'What is role do you want to add?',
        choices: ['Engineer', 'Intern', 'Finish'],
    }
]).then((data) => {
    if (data.role === 'Engineer') {
        newEngineer(data);
    } else if (data.role === 'Intern') {
        newIntern(data);
    // } else if (data.role === 'Manager') {
    //     newManager(data);
    } else if (data.role === 'Finish') {
        console.log("Team: ", employees);
        return;
}
});

function newEngineer(data) {
        inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?',
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is your ID?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email?',
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is your GitHub username?',
        },
    ]) .then((data) => {
        const engineer = new Engineer(data.name, data.id, data.email, data.github);
        employees.push(engineer);
        console.log("Team: ", employees)
        assembleTeam(employees);
        newEmployee();
    });
    };
};

function newIntern(data) {
        inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?',
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is your ID?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email?',
        },
        {
            type: 'input',
            name: 'school',
            message: 'What school do you attend?',
        },
    ]) .then((data) => {
        const intern = new Intern(data.name, data.id, data.email, data.school);
        employees.push(intern);
        console.log("Team: ", employees)
        assembleTeam(employees);
        newEmployee();
        });
    };

function newManager() {
        inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?',
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is your ID?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email?',
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'What is your office number?',
        },
    ]) .then((data) => {
        const manager = new Manager(data.name, data.id, data.email, data.officeNumber);
        employees.push(manager);
        console.log("Team: ", employees);
        assembleTeam(employees);
        newEmployee();
        
    });
};

function assembleTeam(employees) {
    console.log("Assembled Team: ", JSON.stringify(employees));
    const htmlPageContent = generateHTML(employees);
    console.log('html function output: ' + htmlPageContent)
    writeToFile('index.html', htmlPageContent);
};


function generateHTML(employees) {
    let html = 'EMPTY';
    if (employees.role === 'Manager') {
            html += 
  `<!DOCTYPE html>
  <html lang = "en">
  <head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Team Profile</title>
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
  <link rel="stylesheet" href="style.css">
  </head>
  <body>
  <div class="container">
    <h1 class="display-4">Hi! My name is ${data.name}</h1>
    <p class="lead">My work id is: ${data.id}.</p>
    <h3>Example heading <span class="badge badge-secondary">Contact Me</span></h3>
    <ul class="list-group">
      <li class="list-group-item">My email is ${data.email}</li>
      <li class="list-group-item">My Office Number Is: ${data.getOfficeNumber}</li>
    </ul>
  </div>
  </body>`;
} else if (employees.role === 'Engineer') {
    html += 
    `<!DOCTYPE html>
    <html lang = "en">
    <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Profile</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
    </head>
    <body>
    <div class="container">
        <h1 class="display-4">Hi! My name is ${data.name}</h1>
        <p class="lead">My work id is: ${data.id}.</p>
        <h3>Example heading <span class="badge badge-secondary">Contact Me</span></h3>
        <ul class="list-group">
          <li class="list-group-item">My email is ${data.email}</li>
          <li class="list-group-item">My github is: ${data.github}</li>
        </ul>
    </div>
    </body>`;
} else if (employees.role === 'Intern') {
    html += 
    `<!DOCTYPE html>
    <html lang = "en">
    <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Profile</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
    </head>
    <body>
    <div class="container">
        <h1 class="display-4">Hi! My name is ${data[0].name}</h1>
        <p class="lead">My work id is: ${data[0].id}.</p>
        <h3>Example heading <span class="badge badge-secondary">Contact Me</span></h3>
        <ul class="list-group">
          <li class="list-group-item">My email is ${data[0].email}</li>
          <li class="list-group-item">My School Is: ${data[0].school}</li>
        </ul>
    </div>
    </body>`;
}
console.log('html that was generated: ' + html);
return html;
}

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => 
        err ? console.log(err) : console.log('Successfully created HTML file!')
        )
}


init();