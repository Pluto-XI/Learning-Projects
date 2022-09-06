//Script to generate vanilla project scaffolding, html, css, and js files.
const fs = require('fs');

let folderName = process.argv[2] || 'Project' //process.argv provides an array of CLI arguments.


try {
fs.mkdirSync(folderName);
fs.writeFileSync(`${folderName}/app.js`, "")
fs.writeFileSync(`${folderName}/styles.css`, "")
fs.writeFileSync(`${folderName}/index.html`, "")
} catch(error) {
    console.log("" + error);
}