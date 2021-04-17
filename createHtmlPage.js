function createHtmlPage(teamMemberArray) {
    let html = `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet">
    <link rel="stylesheet" href="path/to/font-awesome/css/font-awesome.min.css">
    <title>My Team</title>
</head>

<body>
<h1 class="bg-red-500 text-7xl text-white p-10 flex justify-center font-serif">My Team</h1>
<div class="container flex justify-center">
    <div class="employee-card w-72 border-2 bg-blue-600 text-white rounded-md my-10 mx-5">
        <h1 id="name" class="text-left p-2 mx-4 text-2xl">${teamMemberArray[0].name}</h1>
        <h1 id="role" class="text-left p-2 mx-4 text-2xl">${teamMemberArray[0].role}</h1>
        <ul class="list-none bg-white text-gray-500 p-10 border-2 border-gray-500 m-3">
            <li id="id">Id: ${teamMemberArray[0].id}</li>
            <li id="email"><a href="https://mail.google.com/mail/?view=cm&fs=1&to=${teamMemberArray[0].email}">Email: ${teamMemberArray[0].email}</a></li>
            <li id="more">Phone#: ${teamMemberArray[0].officeNumber}</li>
         </ul>
        </div>`



    for (let i = 1; i < teamMemberArray.length; i++) {
        html += ` <div class="employee-card w-72 border-2 bg-blue-600 text-white rounded-md my-10 mx-5">
    <h1 id="name" class="text-left p-2 mx-4 text-2xl">${teamMemberArray[i].name}</h1>
    <h1 id="role" class="text-left p-2 mx-4 text-2xl">${teamMemberArray[i].role}</h1>
    <ul class="list-none bg-white text-gray-500 p-10 border-2 border-gray-500 m-3">
        <li id="id">Id: ${teamMemberArray[i].id}</li>
        <li id="email">Email: ${teamMemberArray[i].email}</li>`

        if (teamMemberArray[i].github !== "" && teamMemberArray[i].github !== undefined) {
            html += `<li id="github"><a href="https://github.com/${teamMemberArray[i].github}">GitHub: ${teamMemberArray[i].github}</a></li>
            </ul>
            </div>`

        } else if (teamMemberArray[i].school !== "" && teamMemberArray[i].school !== undefined) {
            html += `<li id="school">School: ${teamMemberArray[i].school}</li>
            </ul>
            </div>`
        } else {
            html += `<li id="more">Phone#: ${teamMemberArray[i].officeNumber}</li></ul>
            </div>`
        }
    }

    html += `

</div>
</body>
</html>`

    return html





};

module.exports = createHtmlPage;