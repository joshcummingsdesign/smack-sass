# Smack Sass
A starter kit for [Sass](http://sass-lang.com) projects using the Scalable and Modular Architecture for CSS ([SMACSS](smacss.com)) methodology from Jonathan Snook and the Block, Element, Modifier ([BEM](https://en.bem.info/method/definitions)) naming convention. Based on [Sassy Starter](https://github.com/minamarkham/sassy-starter) by Mina Markham.

## File Structure

```
root
  main.scss         # imports each manifest file from other folders into one file

base
  _base.scss        # all the base styles for the project
  _index.scss       # manifest file that imports all base styles
  _normalize.scss   # normalize.css v3.0.2

layout
  _grid.scss        # styles for a 12 column CSS grid
  _index.scss       # manifest file that imports all layout styles

modules
  _index.scss       # manifest file that imports all modules styles

states
  _index.scss       # manifest file that imports all states styles

utilities
  _functions.scss   # all the functions used in the project
  _globals.scss     # global variables
  _helpers.scss     # placeholder selectors and selectors for screen reader text
  _index.scss       # manifest file that imports all utilities styles
  _mixins.scss      # all the mixins used in the project
```
