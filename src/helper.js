const index = require('../index');

function generateHtml(employees) {
    let html = '';
    employees.forEach((teamMember) => {
      //console.log('teamMember: ', teamMember);
      //console.log('Role: ', teamMember.constructor.role);
      //console.log('Role: method - ', teamMember.getRole());

    if (teamMember.getRole() === 'Manager') {
            html += 
  `<div class="card">
    <div class="card-title">${teamMember.getRole()}<br>${teamMember.getName()}</div>
        <ul class="card-list">
            <li>ID: ${teamMember.getId()}</li>
            <li>Email: ${teamMember.getEmail()}</li>
            <li>Office Number: ${teamMember.getOfficeNumber()}</li>
        </ul>
    </div>`
      ;
}
    if (teamMember.getRole() === 'Engineer') {
    html += 
    `<div class="card">
    <div class="card-title">${teamMember.getRole()}<br>${teamMember.getName()}</div>
        <ul class="card-list">
            <li>ID: ${teamMember.getId()}</li>
            <li>Email: ${teamMember.getEmail()}</li>
            <li>GitHub: ${teamMember.getGithub()}</li>
        </ul>
    </div>`
  ;
} 
    if (teamMember.getRole() === 'Intern') {
    html += 
    `<div class="card">
    <div class="card-title">${teamMember.getRole()}<br>${teamMember.getName()}</div>
        <ul class="card-list">
            <li>ID: ${teamMember.getId()}</li>
            <li>Email: ${teamMember.getEmail()}</li>
            <li>School: ${teamMember.getSchool()}</li>
        </ul>
    </div>`
  ;
}
});
console.log('rendered html: ', html);
return html;
}

module.exports = (employees) => {
    return `<!DOCTYPE html>
    <html>
      <head>
        <title>Current Team</title>
        <link rel="stylesheet" href="style.css">
      </head>
      <body>
            <div class="card-container">
                ${generateHtml(employees)}
            </div>
      </body>
    </html>`;
  };