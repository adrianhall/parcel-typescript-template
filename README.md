# Parcel / React / TypeScript / SASS / ESLint Template

This is a template project for a [React application](https://reactjs.org) that uses the following toolchain:

* Bundler: [Parcel](https://parceljs.org)
* Language: [TypeScript](https://www.typescriptlang.org/)
* CSS: [SASS](https://sass-lang.com/dart-sass)
* Code Linter: [ESLint](https://eslint.org/)
* Style Linter: [Stylelint](https://stylelint.io/)
* Visual Test: [Storybook](https://https://storybook.js.org/)

I also include the following packages alongside React (including all tooling):

* [React Router](https://reacttraining.com/react-router/)
* [Ant Design](https://ant.design/)

There are two directories:

* `infrastructure` contains the Azure infrastructure.
* `webapp` contains the front end code.

## Deploying the web application (including infrastructure)

```bash
$> npm install
$> npm run deploy
```

## Destroying the infrastructure

```bash
$> npm run infrastructure:destroy
```
