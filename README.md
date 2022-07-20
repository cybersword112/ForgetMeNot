# Microsoft-auth-notes-app

  ![Badge for GitHub repo top language](https://img.shields.io/github/languages/top/cybersword112/ForgetMeNot?style=flat&logo=appveyor) ![Badge for GitHub last commit](https://img.shields.io/github/last-commit/cybersword112/ForgetMeNot?style=flat&logo=appveyor)
  
  Check out the badges hosted by [shields.io](https://shields.io/).
  
  
  ## Description 
  
  *The what, why, and how:* 
  
  A simple full-stack note taking app allowing users to login through microsoft and store/update their notes, basic CRUD functionality with a simple ejs front end.

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [License](#license)
  
  ## Installation
  
  *Steps required to install project and how to get the development environment running:*
  
  After cloning project run NPM install to install necessary dependencies in the package.json file. after these have installed make sure you create a .env file and  include a mongoDB url inside, link this variable name inside of database.js in the config folder. after that open and re-name the configUse.js file to config.js and replace the commented information inside and save. to run the application simply type "node server.js" in the terminal. or optionally  "npm run dev" to run with nodemon.
  
  ## Usage 
  
  *Instructions and examples for use:*
  
  after the server is running open localhost:port# for the port number used in server.js and you will be taken to a home page, from their you can login through a microsoft account and then continue to your note page. on the note page you can create a note, mark a note complete by clicking it, or delete a note be clicking the garbage icon. Thats it! just a simple CRUD exercise app using microsoft for authentication.
  
  ## Contributing
  
  *If you would like to contribute it, you can follow these guidelines for how to do so.*
  
  an improved front-end, optional note sharing functionality between stored users that link eachother, refactoring any clunky existing code, anything else you'd like to see. this is a decent base to begin building a more complex app from. 
  
  ## License
  
  MIT License
  
  ---
  
  ## Questions?

  <img src="https://avatars.githubusercontent.com/u/86507895?v=4" alt="cybersword112" width="40%" />
  
  For any questions, please contact me with the information below:
 
  GitHub: [@cybersword112](https://api.github.com/users/cybersword112)
  