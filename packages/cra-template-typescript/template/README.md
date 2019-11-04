This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Purpose

The purpose of this project is to provide a dev-ready starting point for modern react development at
Magento.

It includes support for
[Hot Module Replacement](https://webpack.js.org/concepts/hot-module-replacement/) with the webpack
dev server from within a Magento instance

It also includes certain development best practices such as,

- Style guide enforcement with eslint and prettier
- Git hooks to lint, test, and format staged changes pre-commit and pre-push
- A number of helpful npm scripts to make development smooth
- Redux support with [React starter kit](https://redux-starter-kit.js.org/) and
  [React redux](https://react-redux.js.org/)

To use the dev server, simply run `npm start` and add `loader.js` to your template file in Magento
like so

`<script src="http://localhost:3000/loader.js"></script>`

This setup attempts to be unopinionated and as such **does not include**

- A css pre-processor
- Test helpers like [Enzyme](https://github.com/airbnb/enzyme) or
  [React-Testing-Library](https://testing-library.com/docs/react-testing-library/intro)
- [React Spectrum](https://react-spectrum.corp.adobe.com/)

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for
more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time.
This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel,
ESLint, etc) right into your project so you have full control over them. All of the commands except
`eject` will still work, but they will point to the copied scripts so you can tweak them. At this
point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle
deployments, and you shouldn’t feel obligated to use this feature. However we understand that this
tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the
[Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).