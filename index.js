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
        }
    ]).then((data) => {
        const manager = new Manager(data.name, data.id, data.email, data.officeNumber);
        employees.push(manager);
        console.log(manager)
        })
    }
}).then((data) => {
    // const employee = new Employee(data);
    // const htmlInfo = generateHTML(data);
    fs.writeFile('./output.html', generateHTML(data),  (err) =>
    err ? console.log(err) : console.log('Success!')
    );
    employees.push(data);
    console.log(JSON.stringify(employees));
})
}

function generateHTML() {
    let html = '';
    if (constructor.name === 'Manager') {
            html += 
  `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <title>Employee Profile</title>
</head>
<body>
  <div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4">Hi! My name is ${name}</h1>
    <p class="lead">My work id is: ${id}.</p>
    <h3>Example heading <span class="badge badge-secondary">Contact Me</span></h3>
    <ul class="list-group">
      <li class="list-group-item">My email is ${email}</li>
      <li class="list-group-item">My Office Number Is: ${officeNumber}</li>
    </ul>
  </div>
</div>
</body>
</html>`;
} else if (constructor.role === 'Engineer') {
    html += `<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
      <title>Employee Profile</title>
    </head>
    <body>
      <div class="jumbotron jumbotron-fluid">
      <div class="container">
        <h1 class="display-4">Hi! My name is ${name}</h1>
        <p class="lead">My work id is: ${id}.</p>
        <h3>Example heading <span class="badge badge-secondary">Contact Me</span></h3>
        <ul class="list-group">
          <li class="list-group-item">My email is ${email}</li>
          <li class="list-group-item">My github is: ${github}</li>
        </ul>
      </div>
    </div>
    </body>
    </html>`;
} else if (constructor.role === 'Intern') {
    html += `<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
      <title>Employee Profile</title>
    </head>
    <body>
      <div class="jumbotron jumbotron-fluid">
      <div class="container">
        <h1 class="display-4">Hi! My name is ${name}</h1>
        <p class="lead">My work id is: ${id}.</p>
        <h3>Example heading <span class="badge badge-secondary">Contact Me</span></h3>
        <ul class="list-group">
          <li class="list-group-item">My email is ${email}</li>
          <li class="list-group-item">My School Is: ${school}</li>
        </ul>
      </div>
    </div>
    </body>
    </html>`;
}
return html;
}




init();