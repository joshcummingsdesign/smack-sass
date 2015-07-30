# Smack Sass
A starter kit for [Sass](http://sass-lang.com) projects using the Scalable and Modular Architecture for CSS ([SMACSS](smacss.com)) methodology by Jonathan Snook and the Block, Element, Modifier ([BEM](https://en.bem.info/method/definitions)) naming convention by Yandex. Based on [Sassy Starter](https://github.com/minamarkham/sassy-starter) by Mina Markham. Feel free to adapt Smack Sass to meet your specific needs. I hope Smack Sass helps you organize your CSS in a more efficient way.

## Quick Start
1. Fork & clone the git repository, or click Download ZIP.
3. Watch for changes by running ```sass --watch scss:css```.
4. Use Autoprefixer by running ```grunt```.

## File Structure
```
├── base
│   ├── _base.scss        # all of the base styles for the project
│   ├── _index.scss       # manifest file, this imports all of the base files
│   └── _normalize.scss   # normalize.css v3.0.2
├── gruntfile.js          # Gruntfile for Autoprefixer v5.2.0
├── index.html            # your html goes here
├── layout
│   ├── _grid.scss        # styles for a 12 column CSS grid
│   └── _index.scss       # manifest file, this imports all of the layout files
├── modules
│   └── _index.scss       # manifest file, this imports all of the modules files
├── node_modules          # for Grunt and Autoprefixer, should not be modified
├── package.json          # for Grunt and Autoprefixer, should not be modified
├── scss
│   └── styles.scss       # core manifest file, this outputs your styles.css file
├── states
│   └── _index.scss       # manifest file, this imports all of the states files
└── utilities
    ├── _functions.scss   # all of the functions used in the project
    ├── _globals.scss     # global variables
    ├── _helpers.scss     # placeholder selectors and selectors for screen reader text
    ├── _index.scss       # manifest file, this imports all of the utilities files
    └── _mixins.scss      # all of the mixins used in the project
```
## Resources
* [Sass](http://sass-lang.com/)
* [SMACSS](https://smacss.com/)
* [BEM](https://en.bem.info/method/definitions)
* [Sassy Starter](https://github.com/minamarkham/sassy-starter)
* [Normalize.css](http://necolas.github.io/normalize.css/)
* [Grunt](http://gruntjs.com/)
* [Autoprefixer](https://github.com/postcss/autoprefixer)

## Thank You
* [Guil Hernandez](https://twitter.com/guilh) at [Sass break](http://sassbreak.com/about/) for help with some of the functions and mixins for this project.
* [Mina Markham](https://twitter.com/MinaMarkham) for creating such a great tool with [Sassy Starter](https://github.com/minamarkham/sassy-starter).
* [Jonathan Snook](https://twitter.com/snookca) for making CSS more organized with [SMACSS](https://smacss.com/).
