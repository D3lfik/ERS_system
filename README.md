# ERS Application (Employee Review System)

This is a full-stack web application called Employee Review System (ERS) built using Node.js, Express.js, MongoDB, Passport.js, and Passport-local for authentication. The application follows the MVC (Model-View-Controller) structure.

## Developer
- **Developer Name:** Apurv Nandgaonkar

# Hosted Link -> https://git-bitz-ers.onrender.com

## File Structure
```
ERS-Application
│   index.js
│   .env
│
└───assets
│   └───css
│       │   addEmployee.css
│       │   admin.css
│       │   footer.css
│       │   employee.css
│       │   home.css
│       │   layout.css
│       │   signin.css
│       │   signout.css
│
└───images
│       logo.png
│
└───config
│       flashMiddleware.js
│       mongoose.js
│       passport.js
│       passport-local-Strategy.js
│
└───controllers
│       admin_controller.js
│       home_controller.js
│       review_controller.js
│       user_controller.js
│
└───models
│       admin.js
│       index.js
│       reviews.js
│       user.js
│
└───routes
│       admin.js
│       index.js
│       reviews.js
│       user.js
│
└───views
    │   _footer.ejs
    │   _header.ejs
    │   addEmployee.ejs
    │   admin.ejs
    │   employee.ejs
    │   forget_passport.ejs
    │   home.ejs
    │   layout.ejs
    │   sign_in.ejs
    │   sign_up.ejs
```

## Description
The Employee Review System (ERS) application allows users to manage employee reviews and feedback. It enables administrators to assign reviewers to employees and mark them as admins. Employees can view and submit reviews for other employees. The application provides user authentication through Passport.js with local strategy.

## Installation
1. Clone the repository from GitHub.
2. Install the required dependencies using `npm install`.
3. Create a `.env` file and set up the required environment variables, such as database connection URL and session secret.

## How to Run
- To start the application, run `npm start` or `node index.js`.
- Open your browser and go to `http://localhost:4000` to access the application.

## Features
- User authentication with Passport.js
- Admin can assign reviewers to employees
- Employees can submit reviews for other employees
- Flash messages for success and error notifications

## License
This project is licensed under the [MIT License](LICENSE).

Feel free to contribute and enhance the application! If you encounter any issues or have suggestions, please open an issue on the GitHub repository.
