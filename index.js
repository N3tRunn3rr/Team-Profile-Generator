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
        return newEmployee();
}

function newEmployee() {
    inquirer.prompt([
    {
        type: 'list',
        name: 'role',
        message: 'What is your role?',
        choices: ['Engineer', 'Intern', 'Manager', 'None'],
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
            console.log("Team: ", employees)
            newEmployee()
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
    // return answer;
}).then((data) => {
    console.log("Data: ", data);
    console.log("Team: ", employees);

    const htmlPageContent = generateHTML(employees);
    console.log('htmlPageContent output: ' + htmlPageContent)
    employees.push(data);
    console.log(JSON.stringify(employees));
    writeToFile('index.html', htmlPageContent);
})
};


function generateHTML(data) {
    let html = 'EMPTY';
    if (data[0].role === 'Manager') {
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
} else if (data[0].role === 'Engineer') {
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
} else if (data[0].role === 'Intern') {
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