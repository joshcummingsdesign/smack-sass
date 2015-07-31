# Smack Sass
A starter kit for [Sass](http://sass-lang.com) projects using the Scalable and Modular Architecture for CSS ([SMACSS](smacss.com)) methodology by Jonathan Snook and the Block, Element, Modifier ([BEM](https://en.bem.info/method/definitions)) naming convention by Yandex. Based on [Sassy Starter](https://github.com/minamarkham/sassy-starter) by Mina Markham. Feel free to adapt Smack Sass to meet your specific needs. I hope Smack Sass helps you organize your CSS in a more efficient way.

## Installation
1. Clone the git repository, or click Download ZIP.
2. Install Sass by running ```gem install sass```.
3. Install the Grunt CLI by running ```npm install -g grunt-cli```.

## Instructions
1. Watch for changes by running ```sass --watch scss:css```.
2. Compress the output by running ```sass --watch scss:css --style compressed```.
3. Use Autoprefixer by running ```grunt prefix```.
4. Beautify your JavaScript by running ```grunt cleanjs```.
5. Uglify your JavaScript by running ```grunt buildjs```.

## File Structure
```
├── base
│   ├── _base.scss          # all of the base styles for the project
│   ├── _index.scss         # base manifest file
│   └── _normalize.scss     # normalize.css v3.0.2
├── css
│   └── styles.css          # main CSS file for your site
├── gruntfile.js            # configures Grunt tasks
├── index.html              # start writing your HTML here
├── js
│   └── script.min.js       # uglified js file for your site
├── layout
│   ├── _grid.scss          # styles for a twelve-column grid
│   └── _index.scss         # layout manifest file
├── modules
│   └── _index.scss         # modules manifest file
├── node_modules            # Node modules for Grunt
├── package.json            # JSON data for Grunt
├── scss
│   └── styles.scss         # core manifest file
├── src
│   └── js                  # js files in this directory can be uglified
│       └── script.js       # start writing your JavaScript here
├── states
│   └── _index.scss         # states manifest file
└── utilities
    ├── _functions.scss     # all of the functions for the project
    ├── _globals.scss       # global variables
    ├── _helpers.scss       # placeholder selectors, screen reader text, etc.
    ├── _index.scss         # utilities manifest file
    └── _mixins.scss        # all of the mixins for the project
```
## Resources
* [Sass](http://sass-lang.com/)
* [SMACSS](https://smacss.com/)
* [BEM](https://en.bem.info/method/definitions)
* [Sassy Starter](https://github.com/minamarkham/sassy-starter)
* [Normalize.css](http://necolas.github.io/normalize.css/)
* [Grunt](http://gruntjs.com/)
* [Autoprefixer](https://github.com/postcss/autoprefixer)
* [Uglify](https://github.com/gruntjs/grunt-contrib-uglify)

## Thank You
* [Guil Hernandez](https://twitter.com/guilh) at [Sass break](http://sassbreak.com/about/) for help with some of the functions and mixins for this project.
* [Mina Markham](https://twitter.com/MinaMarkham) for creating such a great tool with [Sassy Starter](https://github.com/minamarkham/sassy-starter).
* [Jonathan Snook](https://twitter.com/snookca) for making CSS more organized with [SMACSS](https://smacss.com/).
