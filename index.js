const inquirer = require('inquirer');
const fs = require('fs');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const generateHtml = require('./src/helper');
const Employee = require('./lib/Employee');
const employees = [];


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
    } else if (data.role === 'Finish') {
        console.log("Team: ", employees);
        assembleTeam((employees));
        return;
}
});


function newEngineer() {
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
        // assembleTeam(JSON.stringify(employees));
        newEmployee();
    });
    };
};

function newIntern() {
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
        // assembleTeam(JSON.stringify(employees));
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
        // assembleTeam(JSON.stringify(employees));
        newEmployee();
        
    });
};

function assembleTeam() {
    fs.writeFileSync('./dist/output.html', generateHtml(employees), 'utf-8');
    console.log("Team used to generate html:  ", JSON.stringify(employees));
}
    // console.log("Assembled Team: ", JSON.stringify(employees));
    // const htmlPageContent = generateHTML(employees);
    // console.log('html function output: ' + htmlPageContent)
    // writeToFile('index.html', htmlPageContent);


// function writeToFile(fileName, data) {
//     fs.writeFile(fileName, data, (err) => 
//         err ? console.log(err) : console.log('Successfully created HTML file!')
//         )
// }

//TODO: cant get html to render but the rest works
init();