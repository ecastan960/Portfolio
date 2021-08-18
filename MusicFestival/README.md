# Music Festival Web Page

## Overview

In this project a web page is developed using several tools to automatize the creation of css and js files for deployment.

## Source of the project

Udemy Course: Desarrollo Web Completo con HTML5, CSS3, JS AJAX PHP y MySQL

## Link to the project

https://musicfestival2021.netlify.app/

## Key topics

The following topics are covered in the
creation of the project:

- HTML
  - Files structure
  - Best practices
  - Use of videos and images
- Gulp
  - Libraries installations
  - Main file creation and set up
  - Automatization of tasks
  - Minifier of files
- CSS/SASS
  - Files structure
  - Best practices
  - Set up file
- Javascript
  - Handling of events
  - Automatization of tasks in
  - Manipulation of images

## Concepts review

- Creation of package.json: This file holds information relevant to the project and it is used mainly for managing the project's dependencies, scripts and versions

```bash
npm init
```

- Installation of gulp: Gulp is a library that helps automate repetitive tasks to improve efficiency.

```bash
npm i --save-dev gulp
```

- Gulp plug-in to compile sass

```bash
npm i sass gulp-sass --save-dev
```

- gulpfile.js: Configuration file of gulp. Contains plug-ins to use and automatization functions. Some of the main functions of gulp used are the following:

```js
const { series, src, dest, watch } = require("gulp");
```

- app.scss: Configuration file of sass that specifies which file to include in the proyect. Example:

```css
@import "base/normalize";
```

- Mixins: Exclusive on Sass, not available in css. They allow to define styles that can be re-used. Example in the mixin file:

```css
@mixin tablet {
  @media (min-width: $tablet) {
    @content;
  }
}
@mixin grid($columns, $space) {
  display: grid;
  grid-template-columns: repeat($columns, 1fr);
  gap: $space;
}
```
