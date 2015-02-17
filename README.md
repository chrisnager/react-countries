# react-countries

Small React app that displays a list of countries in the world


## Demo & Examples

Live demo: [chrisnager.github.io/react-countries](http://chrisnager.github.io/react-countries/)

To build the examples locally, run:

```
npm install
gulp dev
```

Then open [`localhost:8000`](http://localhost:8000) in a browser.


## Installation

The easiest way to use react-countries is to install it from NPM and include it in your own React build process (using [Browserify](http://browserify.org), [Webpack](http://webpack.github.io/), etc).

You can also use the standalone build by including `dist/react-countries.js` in your page. If you use this, make sure you have already included React, and it is available as a global variable.

```
npm install react-countries --save
```


## Usage

```
var ReactCountries = require('react-countries');

<ReactCountries>Example</ReactCountries>
```


### License

MIT License

Copyright (c) 2015 Chris Nager.
