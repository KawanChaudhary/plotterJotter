# Plotter Jotter : Plot Your Thoughts

This is another version of like To Do web based application. Here, a user can record his/her day-to-day activities or plan out the work according to the list that is made out using this app. Suitable for gathering information anytime, anywhere online.

## How to run the app

1. Either fork or download the app and open the folder in the CLI. To edit or see the code, I preferably open the folder in the Atom editor.
2. A local machine with node, nodemon, mongodb, git, already installed is used. We can install them respectively from their official website.
3. Next, install all the dependencies required in this project using 'npm i' or 'npm install' (without single quote) in the terminal or prompt.
5. Use ```npm run both``` in the command terminal to run the project; next time the app runs, the editted code is saved, and content is refreshed in the web browser for updation.
4. The entry point of the project is app.js. So start the web server, by running local commands, for which opening the web browser (preferably the chrome browser), the app will be served at http://localhost:3000

## How to use

1. Go to Url:
2. SignUp to your account or SignIn if already have one.
3. Creat new note, when the note is created, the description is truncated, so click to read more to see entire content.

4. You can create as many tasks as you like.
5. You can add, delete and update notes.

## User stories

- A user can narrate their thought on how things can be done
- A user can filter out the unnecessary tasks by deleting them

## Features

- Backend support in filling up the information at the time the task is created
- Storage of tasks created
- Deletion of tasks in one click
- Beautiful interface

## Dependencies

- React
- Node
- Express
- bcryptjs
- jwtweb-token
- mongoose
- Bootstrap

## What the app looks like

https://user-images.githubusercontent.com/84012092/200963336-4c59c398-9d72-42e5-970a-446689f0bf1b.mp4

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
