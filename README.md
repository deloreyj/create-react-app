# Create React App [![Build Status](https://dev.azure.com/facebook/create-react-app/_apis/build/status/facebook.create-react-app?branchName=master)](https://dev.azure.com/facebook/create-react-app/_build/latest?definitionId=1&branchName=master) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-green.svg)](https://github.com/facebook/create-react-app/blob/master/CONTRIBUTING.md)

Create React apps with no build configuration.

- [Creating an App](#creating-an-app) – How to create a new app.
- [User Guide](https://facebook.github.io/create-react-app/) – How to develop apps bootstrapped with Create React App.

Getting Started – How to create a new app.
User Guide – How to develop apps bootstrapped with Create React App.
Usage
run npx create-react-app [app name] --scripts-version @mage-catfish/react-scripts --template @mage-catfish/cra-template

Purpose
The purpose of this project is to provide a dev-ready starting point for modern react development at Magento.

It includes support for Hot Module Replacement with the webpack dev server from within a Magento instance

It also includes certain development best practices such as,

Style guide enforcement with eslint and prettier
Git hooks to lint, test, and format staged changes pre-commit and pre-push
A number of helpful npm scripts to make development smooth
Redux support with Redux starter kit, React redux, and Redux thunk
Test helpers with React-Testing-Library
To use the dev server, simply run npm start and add loader.js to your template file in Magento like so

<script src="http://localhost:3000/loader.js"></script>

This setup attempts to be unopinionated and as such does not include

A css pre-processor
React Spectrum
What if I just want the dev server in my existing project?
Once your CRA project is bootstrapped, you can still get the dev server to help in your day-to-day Magento development.

Here's the process:

run npm uninstall react-scripts from your project directory
run npm install @mage-catfish/react-scripts
add a file called public-path.js to your source with this in it. Import this file on line 1 of index.js like so. This is necessary for webpack to load static assets from the correct location in the dev server.
add or update your public/loader.js file similar to this file. The important parts are the currentBaseUrl assignment, the 3 files being loaded, and the window global assignment.
Add loader.js to your template file in Magento like so <script src="http://localhost:3000/loader.js"></script>
Navigate to the page in your Magento instance, make a change in your dev code, and the page should update or refresh on save.
