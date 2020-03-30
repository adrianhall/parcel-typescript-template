# Parcel / React / TypeScript / SASS / ESLint Template

This is a template project for a [React application](https://reactjs.org) that uses the following toolchain:

* Bundler: [Parcel](https://parceljs.org)
* Language: [TypeScript](https://www.typescriptlang.org/)
* CSS: [SASS](https://sass-lang.com/dart-sass)
* Code Linter: [ESLint](https://eslint.org/)
* Style Linter: [Stylelint](https://stylelint.io/)
* Visual Test: [Storybook](https://https://storybook.js.org/)

There are three directories:

* `infrastructure` contains the Azure infrastructure.
* `backend` contains the Azure backend code.
* `webapp` contains the front end code.

## Deploying

```bash
$> npm install
$> npm run deploy
```

## Destroying the infrastructure

```bash
$> npm run infrastructure:destroy
```
