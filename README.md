# Smack Sass
A starter kit for [Sass](http://sass-lang.com) projects using the Scalable and Modular Architecture for CSS ([SMACSS](smacss.com)) methodology by Jonathan Snook and the Block, Element, Modifier ([BEM](https://en.bem.info/method/definitions)) naming convention by Yandex. Based on [Sassy Starter](https://github.com/minamarkham/sassy-starter) by Mina Markham. Feel free to adapt Smack Sass to meet your specific needs. I hope Smack Sass helps you organize your CSS in a more efficient way.

## Quick Start
1. Fork & clone the git repository, or click Download ZIP.
2. Install Sass by running ```gem install sass```.
3. Watch for changes by running ```sass --watch styles.scss```.
4. Sass will create a styles.css file that you can use for your site.

## File Structure

```
root
  styles.scss       # core manifest file, this outputs your styles.css file

base
  _base.scss        # all the base styles for the project
  _index.scss       # manifest file that imports all the base styles
  _normalize.scss   # normalize.css v3.0.2

layout
  _grid.scss        # styles for a 12 column CSS grid
  _index.scss       # manifest file that imports all the layout styles

modules
  _index.scss       # manifest file that imports all the module styles

states
  _index.scss       # manifest file that imports all the state styles

utilities
  _functions.scss   # all the functions used in the project
  _globals.scss     # global variables
  _helpers.scss     # placeholder selectors and selectors for screen reader text
  _index.scss       # manifest file that imports all the utility styles
  _mixins.scss      # all the mixins used in the project
```
## Resources
* [Sass](http://sass-lang.com/)
* [SMACSS](https://smacss.com/)
* [BEM](https://en.bem.info/method/definitions)
* [Sassy Starter](https://github.com/minamarkham/sassy-starter)
* [Normalize.css](http://necolas.github.io/normalize.css/)

## Thank You
* [Guil Hernandez](https://twitter.com/guilh) at [Sass break](http://sassbreak.com/about/) for help with some of the functions and mixins for this project.
* [Mina Markham](https://twitter.com/MinaMarkham) for creating such a great tool with [Sassy Starter](https://github.com/minamarkham/sassy-starter).
* [Jonathan Snook](https://twitter.com/snookca) for making CSS more organized with [SMACSS](https://smacss.com/).
