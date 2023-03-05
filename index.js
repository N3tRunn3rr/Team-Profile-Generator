const inquirer = require('inquirer');
const fs = require('fs');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const Employee = require('./lib/Employee');
const employees = [];

function newEmployee() {
    return inquirer.prompt ([
    {
        type: 'input',
        message: 'What is your name?',
        name: 'name',
    },
    {
        type: 'input',
        message: 'What is your ID?',
        name: 'id',
    },
    {
        type: 'input',
        message: 'What is your email?',
        name: 'email',
    },
    {
        type: 'list',
        message: 'What is your role?',
        role: 'role',
        choices: ['Engineer', 'Intern', 'Manager'],
    },
]).then((answers) => {
    if ( answers.role === 'Engineer') {
        inquirer.prompt([{
            type: 'input',
            message: 'What is your GitHub username?',
            name: 'github',
        }])}
    else if (answers.role === 'Intern') {
        inquirer.prompt([{
            type: 'input',
            message: 'What school do you attend?',
            name: 'school',
        }])}
    else if (answers.role === 'Manager') {
        inquirer.prompt([{
            type: 'input',
            message: 'What is your office number?',
            name: 'officeNumber',
        }])}
    }).then((answers) => {
        if (answers.role === 'Engineer') {
            const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
            employees.push(engineer);
        }
        else if (answers.role === 'Intern') {
            const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
            employees.push(intern);
        }
        else if (answers.role === 'Manager') {
            const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
            employees.push(manager);
        }
    })
}

function init() {
    newEmployee()
    .then((answers) => employees.push(answers))
    .then(buildTeam)
    .catch(function(err) {
    console.log(err)
    });
}

function buildTeam () {
    fs.writeFileSync('./dist/output.html', render(employees), "utf-8");
}

init();