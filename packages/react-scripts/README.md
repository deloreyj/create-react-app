# react-scripts

This package includes scripts and configuration used by [Create React App](https://github.com/facebook/create-react-app).<br>
Please refer to its documentation:

- [Getting Started](https://facebook.github.io/create-react-app/docs/getting-started) – How to create a new app.
- [User Guide](https://facebook.github.io/create-react-app/) – How to develop apps bootstrapped with Create React App.

## Usage

run `npx create-react-app [app name] --scripts-version @mage-catfish/react-scripts`

## Purpose

The purpose of this project is to provide a dev-ready starting point for modern react development at Magento without deviating too much from industry standards. This fork of Facebook's react-scripts.

It includes support for [Hot Module Replacement](https://webpack.js.org/concepts/hot-module-replacement/) with the webpack dev server from within a Magento instance

It also includes certain Magento frontend development best practices such as,

- Style guide enforcement with eslint and prettier
- Git hooks to lint, test, and format staged changes pre-commit and pre-push
- A number of helpful npm scripts to make development smooth
- Redux support with [React starter kit](https://redux-starter-kit.js.org/) and [React redux](https://react-redux.js.org/)

To use the dev server, simply run `npm start` and add `loader.js` to your template file in Magento like so

`<script src="http://localhost:3000/loader.js"></script>`

This setup attempts to be unopinionated and as such **does not include**

- A css pre-processor
- Test helpers like [Enzyme](https://github.com/airbnb/enzyme) or [React-Testing-Library](https://testing-library.com/docs/react-testing-library/intro)
- [React Spectrum](https://react-spectrum.corp.adobe.com/)

## What if I just want the dev server in my existing project?

Once your CRA project is bootstrapped, you can still get the dev server to help in your day-to-day Magento development.

Here's the process:

1. run `npm uninstall react-scripts` from your project directory
2. run `npm install @mage-catfish/react-scripts`
3. add a file called `public-path.js` to your source with [this](https://github.com/deloreyj/create-react-app/blob/master/packages/react-scripts/template/src/public-path.js) in it. Import this file on line 1 of `index.js` [like so](https://github.com/deloreyj/create-react-app/blob/master/packages/react-scripts/template/src/index.js#L1). This is necessary for webpack to load static assets from the correct location in the dev server.
4. add or update your `public/loader.js` file similar to [this file](https://github.com/deloreyj/create-react-app/blob/master/packages/react-scripts/template/public/loader.js). The important parts are the [`currentBaseUrl` assignment](https://github.com/deloreyj/create-react-app/blob/master/packages/react-scripts/template/public/loader.js#L2), [the 3 files being loaded](https://github.com/deloreyj/create-react-app/blob/master/packages/react-scripts/template/public/loader.js#L21-L23), and the [window global assignment](https://github.com/deloreyj/create-react-app/blob/master/packages/react-scripts/template/public/loader.js#L25-L26).
5. Add loader.js to your template file in Magento like so `<script src="http://localhost:3000/loader.js"></script>`
6. Navigate to the page in your Magento instance, make a change in your dev code, and the page should update or refresh on save.
