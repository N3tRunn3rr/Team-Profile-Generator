const inquirer = require('inquirer');
const fs = require('fs');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
// const generateHTML = require('./src/helper');
// const Employee = require('./lib/Employee');
const employees = [];

//node index.js runs the first question but errors out after you give it a name

function init() {
        return newEmployee();
}

function newEmployee() {
    inquirer.prompt([
    {
        type: 'list',
        name: 'role',
        message: 'What is your role?',
        choices: ['Engineer', 'Intern', 'Manager'],
    }
]).then((answer) => {
    if (answer.role === 'Engineer') { 
            return inquirer.prompt([
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
        ])
        .then((data) => {
        const engineer = new Engineer(data.name, data.id, data.email, data.github);
        employees.push(engineer);
        console.log(engineer)
        });
    } else if (answer.role === 'Intern') {
        return inquirer.prompt([
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
    ]).then((data) => {
        const intern = new Intern(data.name, data.id, data.email, data.school);
        employees.push(intern);
        console.log(intern)
        })
    } else if (answer.role === 'Manager') {
        return inquirer.prompt([
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
        }
    ]).then((data) => {
        const manager = new Manager(data.name, data.id, data.email, data.officeNumber);
        employees.push(manager);
        console.log(employees)
        })
    }
}).then((data) => {
    const htmlPageContent = generateHTML(data);
    fs.writeFile('index.html', htmlPageContent, (err) =>
    err ? console.log(err) : console.log('Success!')
    );
    employees.push(data);
    JSON.stringify(employees);
    console.log(employees);
//     return `<!DOCTYPE html>
// <html lang = "en">
// <head>
// <meta charset="UTF-8">
// <meta http-equiv="X-UA-Compatible" content="IE=edge">
// <meta name="viewport" content="width=device-width, initial-scale=1.0">
// <title>Team Profile</title>
// <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
// <link rel="stylesheet" href="style.css">
// </head>
// <body>
// <header>
// <h1>My Team</h1>
// </header>
// <div class="main-container">
// <div class="row justify-content-center">
// ${generateHTML(data)}
// </div>
// </div>
// </body>
// </html>`;
})
}

function generateHTML() {
    let html = '';
    if (constructor.role === 'Manager') {
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
    <h1 class="display-4">Hi! My name is ${data.getName()}</h1>
    <p class="lead">My work id is: ${data.getId()}.</p>
    <h3>Example heading <span class="badge badge-secondary">Contact Me</span></h3>
    <ul class="list-group">
      <li class="list-group-item">My email is ${data.getEmail()}</li>
      <li class="list-group-item">My Office Number Is: ${data.getOfficeNumber()}</li>
    </ul>
  </div>
  </body>`;
  console.log(constructor.role);
} else if (constructor.role === 'Engineer') {
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
        <h1 class="display-4">Hi! My name is ${data.getName()}</h1>
        <p class="lead">My work id is: ${data.getId()}.</p>
        <h3>Example heading <span class="badge badge-secondary">Contact Me</span></h3>
        <ul class="list-group">
          <li class="list-group-item">My email is ${data.getEmail()}</li>
          <li class="list-group-item">My github is: ${data.getGithub()}</li>
        </ul>
    </div>
    </body>`;
    console.log(constructor.role);
} else if (constructor.role === 'Intern') {
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
        <h1 class="display-4">Hi! My name is ${data.getName()}</h1>
        <p class="lead">My work id is: ${data.getId()}.</p>
        <h3>Example heading <span class="badge badge-secondary">Contact Me</span></h3>
        <ul class="list-group">
          <li class="list-group-item">My email is ${data.getEmail()}</li>
          <li class="list-group-item">My School Is: ${data.getSchool()}</li>
        </ul>
    </div>
    </body>`;
    console.log(constructor.role);
}
console.log('html that was generated: ' + html);
return html;
}


init();