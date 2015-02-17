require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"/Users/cnager/Dropbox/Chris/Projects/react-countries/node_modules/reactfire/dist/reactfire.js":[function(require,module,exports){
/*!
 * ReactFire is an open-source JavaScript library that allows you to add a
 * realtime data source to your React apps by providing and easy way to let
 * Firebase populate the state of React components.
 *
 * ReactFire 0.4.0
 * https://github.com/firebase/reactfire/
 * License: MIT
 */

;(function (root, factory) {
  "use strict";
  if (typeof define === "function" && define.amd) {
    // AMD
    define([], function() {
      return (root.ReactFireMixin = factory());
    });
  } else if (typeof exports === "object") {
    // CommonJS
    module.exports = factory();
  } else {
    // Global variables
    root.ReactFireMixin = factory();
  }
}(this, function() {
  "use strict";

var ReactFireMixin = {
  /********************/
  /*  MIXIN LIFETIME  */
  /********************/
  /* Initializes the Firebase binding refs array */
  componentWillMount: function() {
    this.firebaseRefs = {};
    this.firebaseListeners = {};
  },

  /* Removes any remaining Firebase bindings */
  componentWillUnmount: function() {
    for (var key in this.firebaseRefs) {
      if (this.firebaseRefs.hasOwnProperty(key)) {
        this.unbind(key);
      }
    }
  },


  /*************/
  /*  BINDING  */
  /*************/
  /* Creates a binding between Firebase and the inputted bind variable as an array */
  bindAsArray: function(firebaseRef, bindVar, cancelCallback) {
    this._bind(firebaseRef, bindVar, cancelCallback, true);
  },

  /* Creates a binding between Firebase and the inputted bind variable as an object */
  bindAsObject: function(firebaseRef, bindVar, cancelCallback) {
    this._bind(firebaseRef, bindVar, cancelCallback, false);
  },

  /* Creates a binding between Firebase and the inputted bind variable as either an array or object */
  _bind: function(firebaseRef, bindVar, cancelCallback, bindAsArray) {
    this._validateBindVar(bindVar);

    var errorMessage, errorCode;
    if (Object.prototype.toString.call(firebaseRef) !== "[object Object]") {
      errorMessage = "firebaseRef must be an instance of Firebase";
      errorCode = "INVALID_FIREBASE_REF";
    }
    else if (typeof bindAsArray !== "boolean") {
      errorMessage = "bindAsArray must be a boolean. Got: " + bindAsArray;
      errorCode = "INVALID_BIND_AS_ARRAY";
    }

    if (typeof errorMessage !== "undefined") {
      var error = new Error("ReactFire: " + errorMessage);
      error.code = errorCode;
      throw error;
    }

    this.firebaseRefs[bindVar] = firebaseRef.ref();
    this.firebaseListeners[bindVar] = firebaseRef.on("value", function(dataSnapshot) {
      var newState = {};
      if (bindAsArray) {
        newState[bindVar] = this._toArray(dataSnapshot.val());
      }
      else {
        newState[bindVar] = dataSnapshot.val();
      }
      this.setState(newState);
    }.bind(this), cancelCallback);
  },

  /* Removes the binding between Firebase and the inputted bind variable */
  unbind: function(bindVar) {
    this._validateBindVar(bindVar);

    if (typeof this.firebaseRefs[bindVar] === "undefined") {
      var error = new Error("ReactFire: unexpected value for bindVar. \"" + bindVar + "\" was either never bound or has already been unbound");
      error.code = "UNBOUND_BIND_VARIABLE";
      throw error;
    }

    this.firebaseRefs[bindVar].off("value", this.firebaseListeners[bindVar]);
    delete this.firebaseRefs[bindVar];
    delete this.firebaseListeners[bindVar];
  },


  /*************/
  /*  HELPERS  */
  /*************/
  /* Validates the name of the variable which is being bound */
  _validateBindVar: function(bindVar) {
    var errorMessage;

    if (typeof bindVar !== "string") {
      errorMessage = "bindVar must be a string. Got: " + bindVar;
    }
    else if (bindVar.length === 0) {
      errorMessage = "bindVar must be a non-empty string. Got: \"\"";
    }
    else if (bindVar.length > 768) {
      // Firebase can only stored child paths up to 768 characters
      errorMessage = "bindVar is too long to be stored in Firebase. Got: " + bindVar;
    }
    else if (/[\[\].#$\/\u0000-\u001F\u007F]/.test(bindVar)) {
      // Firebase does not allow node keys to contain the following characters
      errorMessage = "bindVar cannot contain any of the following characters: . # $ ] [ /. Got: " + bindVar;
    }

    if (typeof errorMessage !== "undefined") {
      var error = new Error("ReactFire: " + errorMessage);
      error.code = "INVALID_BIND_VARIABLE";
      throw error;
    }
  },


  /* Returns true if the inputted object is a JavaScript array */
  _isArray: function(obj) {
    return (Object.prototype.toString.call(obj) === "[object Array]");
  },

  /* Converts a Firebase object to a JavaScript array */
  _toArray: function(obj) {
    var out = [];
    if (obj) {
      if (this._isArray(obj)) {
        out = obj;
      }
      else if (typeof(obj) === "object") {
        for (var key in obj) {
          if (obj.hasOwnProperty(key)) {
            out.push(obj[key]);
          }
        }
      }
    }
    return out;
  }
};

  return ReactFireMixin;
}));
},{}],"react-countries":[function(require,module,exports){
var React = require('react'),
    Firebase = require('firebase'),
    ReactFire = require('reactfire/dist/reactfire.js');

var Countries = React.createClass({displayName: "Countries",
    mixins: [ReactFireMixin],

    getInitialState: function() {
        return {countries: [], text: ''};
    },

    componentWillMount: function() {
        var firebaseRef = new Firebase('//countries.firebaseio.com');

        this.bindAsArray(firebaseRef, 'countries');
    },

    render: function() {
        return React.createElement(Country, {countries:  this.state.countries});
    }
});

var Country = React.createClass({displayName: "Country",
    getInitialState: function() {
        return {page: 0}
    },

    prevPage: function() {
        if (this.state.page > 0) {
            this.setState({
                page: this.state.page - 1
            });
        }
    },

    nextPage: function() {
        if (this.state.page < ~~(this.props.countries.length / 10)) {
            this.setState({
                page: this.state.page + 1
            });
        }
    },

    render: function() {
        var countryStyles = {
                borderBottom: '1px solid #aaa',
                padding: '1rem 2rem'
            },

            navStyles = {
                borderTop: '1px solid #aaa',
                borderBottom: '1px solid #aaa'
            },

            flagStyles = {
                height: '1em',
                marginRight: '.5rem'
            },

            nameStyles = {
                marginRight: '.5rem'
            },

            buttonStyles = {
                border: 0,
                padding: '1rem',
                width: '50%',
                backgroundColor: '#eee'
                /*
                button:hover,
                button:focus {
                    background-color: #ddd;
                }

                button:hover {
                    cursor: pointer;
                }

                button:focus {
                    outline: 0;
                }
                */
            },

            createItem = function(country, index) {
                return(
                    React.createElement("li", {style: countryStyles, key: index}, 
                        React.createElement("img", {style: flagStyles, src: ('flags/' + country.cca3 + '.svg').toLowerCase(), alt: country.name.common}), 
                        React.createElement("b", {style: nameStyles}, country.name.common), 
                        React.createElement("span", null, "Capital: ", country.capital)
                    )
                );
            },

            prev = this.prevPage,
            next = this.nextPage,

            currentPage = this.props.countries.slice(this.state.page * 10, this.state.page * 10 + 10);

        return(            
            React.createElement("ul", null, 
               React.createElement("li", {style: navStyles}, 
                   React.createElement("button", {style: buttonStyles, onClick: prev}, this.state.page === 0 ? 'Beginning of list' : 'Previous page (' + this.state.page + ')'), 
                   React.createElement("button", {style: buttonStyles, onClick: next}, this.state.page === ~~(this.props.countries.length / 10) ? 'End of list' : 'Next page  (' + (this.state.page + 2) + ')')
               ), 
               currentPage.map(createItem)
            )
        );
    }
});

var ReactCountries = React.createClass({displayName: "ReactCountries",
	render: function() {
		return React.createElement(Countries, null);
	}
});

module.exports = ReactCountries;

},{"firebase":false,"react":false,"reactfire/dist/reactfire.js":"/Users/cnager/Dropbox/Chris/Projects/react-countries/node_modules/reactfire/dist/reactfire.js"}]},{},[])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9yZWFjdC1jb21wb25lbnQtZ3VscC10YXNrcy9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0ZmlyZS9kaXN0L3JlYWN0ZmlyZS5qcyIsInNyYy9SZWFjdENvdW50cmllcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIvKiFcbiAqIFJlYWN0RmlyZSBpcyBhbiBvcGVuLXNvdXJjZSBKYXZhU2NyaXB0IGxpYnJhcnkgdGhhdCBhbGxvd3MgeW91IHRvIGFkZCBhXG4gKiByZWFsdGltZSBkYXRhIHNvdXJjZSB0byB5b3VyIFJlYWN0IGFwcHMgYnkgcHJvdmlkaW5nIGFuZCBlYXN5IHdheSB0byBsZXRcbiAqIEZpcmViYXNlIHBvcHVsYXRlIHRoZSBzdGF0ZSBvZiBSZWFjdCBjb21wb25lbnRzLlxuICpcbiAqIFJlYWN0RmlyZSAwLjQuMFxuICogaHR0cHM6Ly9naXRodWIuY29tL2ZpcmViYXNlL3JlYWN0ZmlyZS9cbiAqIExpY2Vuc2U6IE1JVFxuICovXG5cbjsoZnVuY3Rpb24gKHJvb3QsIGZhY3RvcnkpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG4gIGlmICh0eXBlb2YgZGVmaW5lID09PSBcImZ1bmN0aW9uXCIgJiYgZGVmaW5lLmFtZCkge1xuICAgIC8vIEFNRFxuICAgIGRlZmluZShbXSwgZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gKHJvb3QuUmVhY3RGaXJlTWl4aW4gPSBmYWN0b3J5KCkpO1xuICAgIH0pO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBleHBvcnRzID09PSBcIm9iamVjdFwiKSB7XG4gICAgLy8gQ29tbW9uSlNcbiAgICBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcbiAgfSBlbHNlIHtcbiAgICAvLyBHbG9iYWwgdmFyaWFibGVzXG4gICAgcm9vdC5SZWFjdEZpcmVNaXhpbiA9IGZhY3RvcnkoKTtcbiAgfVxufSh0aGlzLCBmdW5jdGlvbigpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBSZWFjdEZpcmVNaXhpbiA9IHtcbiAgLyoqKioqKioqKioqKioqKioqKioqL1xuICAvKiAgTUlYSU4gTElGRVRJTUUgICovXG4gIC8qKioqKioqKioqKioqKioqKioqKi9cbiAgLyogSW5pdGlhbGl6ZXMgdGhlIEZpcmViYXNlIGJpbmRpbmcgcmVmcyBhcnJheSAqL1xuICBjb21wb25lbnRXaWxsTW91bnQ6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuZmlyZWJhc2VSZWZzID0ge307XG4gICAgdGhpcy5maXJlYmFzZUxpc3RlbmVycyA9IHt9O1xuICB9LFxuXG4gIC8qIFJlbW92ZXMgYW55IHJlbWFpbmluZyBGaXJlYmFzZSBiaW5kaW5ncyAqL1xuICBjb21wb25lbnRXaWxsVW5tb3VudDogZnVuY3Rpb24oKSB7XG4gICAgZm9yICh2YXIga2V5IGluIHRoaXMuZmlyZWJhc2VSZWZzKSB7XG4gICAgICBpZiAodGhpcy5maXJlYmFzZVJlZnMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICB0aGlzLnVuYmluZChrZXkpO1xuICAgICAgfVxuICAgIH1cbiAgfSxcblxuXG4gIC8qKioqKioqKioqKioqL1xuICAvKiAgQklORElORyAgKi9cbiAgLyoqKioqKioqKioqKiovXG4gIC8qIENyZWF0ZXMgYSBiaW5kaW5nIGJldHdlZW4gRmlyZWJhc2UgYW5kIHRoZSBpbnB1dHRlZCBiaW5kIHZhcmlhYmxlIGFzIGFuIGFycmF5ICovXG4gIGJpbmRBc0FycmF5OiBmdW5jdGlvbihmaXJlYmFzZVJlZiwgYmluZFZhciwgY2FuY2VsQ2FsbGJhY2spIHtcbiAgICB0aGlzLl9iaW5kKGZpcmViYXNlUmVmLCBiaW5kVmFyLCBjYW5jZWxDYWxsYmFjaywgdHJ1ZSk7XG4gIH0sXG5cbiAgLyogQ3JlYXRlcyBhIGJpbmRpbmcgYmV0d2VlbiBGaXJlYmFzZSBhbmQgdGhlIGlucHV0dGVkIGJpbmQgdmFyaWFibGUgYXMgYW4gb2JqZWN0ICovXG4gIGJpbmRBc09iamVjdDogZnVuY3Rpb24oZmlyZWJhc2VSZWYsIGJpbmRWYXIsIGNhbmNlbENhbGxiYWNrKSB7XG4gICAgdGhpcy5fYmluZChmaXJlYmFzZVJlZiwgYmluZFZhciwgY2FuY2VsQ2FsbGJhY2ssIGZhbHNlKTtcbiAgfSxcblxuICAvKiBDcmVhdGVzIGEgYmluZGluZyBiZXR3ZWVuIEZpcmViYXNlIGFuZCB0aGUgaW5wdXR0ZWQgYmluZCB2YXJpYWJsZSBhcyBlaXRoZXIgYW4gYXJyYXkgb3Igb2JqZWN0ICovXG4gIF9iaW5kOiBmdW5jdGlvbihmaXJlYmFzZVJlZiwgYmluZFZhciwgY2FuY2VsQ2FsbGJhY2ssIGJpbmRBc0FycmF5KSB7XG4gICAgdGhpcy5fdmFsaWRhdGVCaW5kVmFyKGJpbmRWYXIpO1xuXG4gICAgdmFyIGVycm9yTWVzc2FnZSwgZXJyb3JDb2RlO1xuICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoZmlyZWJhc2VSZWYpICE9PSBcIltvYmplY3QgT2JqZWN0XVwiKSB7XG4gICAgICBlcnJvck1lc3NhZ2UgPSBcImZpcmViYXNlUmVmIG11c3QgYmUgYW4gaW5zdGFuY2Ugb2YgRmlyZWJhc2VcIjtcbiAgICAgIGVycm9yQ29kZSA9IFwiSU5WQUxJRF9GSVJFQkFTRV9SRUZcIjtcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZW9mIGJpbmRBc0FycmF5ICE9PSBcImJvb2xlYW5cIikge1xuICAgICAgZXJyb3JNZXNzYWdlID0gXCJiaW5kQXNBcnJheSBtdXN0IGJlIGEgYm9vbGVhbi4gR290OiBcIiArIGJpbmRBc0FycmF5O1xuICAgICAgZXJyb3JDb2RlID0gXCJJTlZBTElEX0JJTkRfQVNfQVJSQVlcIjtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIGVycm9yTWVzc2FnZSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgdmFyIGVycm9yID0gbmV3IEVycm9yKFwiUmVhY3RGaXJlOiBcIiArIGVycm9yTWVzc2FnZSk7XG4gICAgICBlcnJvci5jb2RlID0gZXJyb3JDb2RlO1xuICAgICAgdGhyb3cgZXJyb3I7XG4gICAgfVxuXG4gICAgdGhpcy5maXJlYmFzZVJlZnNbYmluZFZhcl0gPSBmaXJlYmFzZVJlZi5yZWYoKTtcbiAgICB0aGlzLmZpcmViYXNlTGlzdGVuZXJzW2JpbmRWYXJdID0gZmlyZWJhc2VSZWYub24oXCJ2YWx1ZVwiLCBmdW5jdGlvbihkYXRhU25hcHNob3QpIHtcbiAgICAgIHZhciBuZXdTdGF0ZSA9IHt9O1xuICAgICAgaWYgKGJpbmRBc0FycmF5KSB7XG4gICAgICAgIG5ld1N0YXRlW2JpbmRWYXJdID0gdGhpcy5fdG9BcnJheShkYXRhU25hcHNob3QudmFsKCkpO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIG5ld1N0YXRlW2JpbmRWYXJdID0gZGF0YVNuYXBzaG90LnZhbCgpO1xuICAgICAgfVxuICAgICAgdGhpcy5zZXRTdGF0ZShuZXdTdGF0ZSk7XG4gICAgfS5iaW5kKHRoaXMpLCBjYW5jZWxDYWxsYmFjayk7XG4gIH0sXG5cbiAgLyogUmVtb3ZlcyB0aGUgYmluZGluZyBiZXR3ZWVuIEZpcmViYXNlIGFuZCB0aGUgaW5wdXR0ZWQgYmluZCB2YXJpYWJsZSAqL1xuICB1bmJpbmQ6IGZ1bmN0aW9uKGJpbmRWYXIpIHtcbiAgICB0aGlzLl92YWxpZGF0ZUJpbmRWYXIoYmluZFZhcik7XG5cbiAgICBpZiAodHlwZW9mIHRoaXMuZmlyZWJhc2VSZWZzW2JpbmRWYXJdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICB2YXIgZXJyb3IgPSBuZXcgRXJyb3IoXCJSZWFjdEZpcmU6IHVuZXhwZWN0ZWQgdmFsdWUgZm9yIGJpbmRWYXIuIFxcXCJcIiArIGJpbmRWYXIgKyBcIlxcXCIgd2FzIGVpdGhlciBuZXZlciBib3VuZCBvciBoYXMgYWxyZWFkeSBiZWVuIHVuYm91bmRcIik7XG4gICAgICBlcnJvci5jb2RlID0gXCJVTkJPVU5EX0JJTkRfVkFSSUFCTEVcIjtcbiAgICAgIHRocm93IGVycm9yO1xuICAgIH1cblxuICAgIHRoaXMuZmlyZWJhc2VSZWZzW2JpbmRWYXJdLm9mZihcInZhbHVlXCIsIHRoaXMuZmlyZWJhc2VMaXN0ZW5lcnNbYmluZFZhcl0pO1xuICAgIGRlbGV0ZSB0aGlzLmZpcmViYXNlUmVmc1tiaW5kVmFyXTtcbiAgICBkZWxldGUgdGhpcy5maXJlYmFzZUxpc3RlbmVyc1tiaW5kVmFyXTtcbiAgfSxcblxuXG4gIC8qKioqKioqKioqKioqL1xuICAvKiAgSEVMUEVSUyAgKi9cbiAgLyoqKioqKioqKioqKiovXG4gIC8qIFZhbGlkYXRlcyB0aGUgbmFtZSBvZiB0aGUgdmFyaWFibGUgd2hpY2ggaXMgYmVpbmcgYm91bmQgKi9cbiAgX3ZhbGlkYXRlQmluZFZhcjogZnVuY3Rpb24oYmluZFZhcikge1xuICAgIHZhciBlcnJvck1lc3NhZ2U7XG5cbiAgICBpZiAodHlwZW9mIGJpbmRWYXIgIT09IFwic3RyaW5nXCIpIHtcbiAgICAgIGVycm9yTWVzc2FnZSA9IFwiYmluZFZhciBtdXN0IGJlIGEgc3RyaW5nLiBHb3Q6IFwiICsgYmluZFZhcjtcbiAgICB9XG4gICAgZWxzZSBpZiAoYmluZFZhci5sZW5ndGggPT09IDApIHtcbiAgICAgIGVycm9yTWVzc2FnZSA9IFwiYmluZFZhciBtdXN0IGJlIGEgbm9uLWVtcHR5IHN0cmluZy4gR290OiBcXFwiXFxcIlwiO1xuICAgIH1cbiAgICBlbHNlIGlmIChiaW5kVmFyLmxlbmd0aCA+IDc2OCkge1xuICAgICAgLy8gRmlyZWJhc2UgY2FuIG9ubHkgc3RvcmVkIGNoaWxkIHBhdGhzIHVwIHRvIDc2OCBjaGFyYWN0ZXJzXG4gICAgICBlcnJvck1lc3NhZ2UgPSBcImJpbmRWYXIgaXMgdG9vIGxvbmcgdG8gYmUgc3RvcmVkIGluIEZpcmViYXNlLiBHb3Q6IFwiICsgYmluZFZhcjtcbiAgICB9XG4gICAgZWxzZSBpZiAoL1tcXFtcXF0uIyRcXC9cXHUwMDAwLVxcdTAwMUZcXHUwMDdGXS8udGVzdChiaW5kVmFyKSkge1xuICAgICAgLy8gRmlyZWJhc2UgZG9lcyBub3QgYWxsb3cgbm9kZSBrZXlzIHRvIGNvbnRhaW4gdGhlIGZvbGxvd2luZyBjaGFyYWN0ZXJzXG4gICAgICBlcnJvck1lc3NhZ2UgPSBcImJpbmRWYXIgY2Fubm90IGNvbnRhaW4gYW55IG9mIHRoZSBmb2xsb3dpbmcgY2hhcmFjdGVyczogLiAjICQgXSBbIC8uIEdvdDogXCIgKyBiaW5kVmFyO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgZXJyb3JNZXNzYWdlICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICB2YXIgZXJyb3IgPSBuZXcgRXJyb3IoXCJSZWFjdEZpcmU6IFwiICsgZXJyb3JNZXNzYWdlKTtcbiAgICAgIGVycm9yLmNvZGUgPSBcIklOVkFMSURfQklORF9WQVJJQUJMRVwiO1xuICAgICAgdGhyb3cgZXJyb3I7XG4gICAgfVxuICB9LFxuXG5cbiAgLyogUmV0dXJucyB0cnVlIGlmIHRoZSBpbnB1dHRlZCBvYmplY3QgaXMgYSBKYXZhU2NyaXB0IGFycmF5ICovXG4gIF9pc0FycmF5OiBmdW5jdGlvbihvYmopIHtcbiAgICByZXR1cm4gKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvYmopID09PSBcIltvYmplY3QgQXJyYXldXCIpO1xuICB9LFxuXG4gIC8qIENvbnZlcnRzIGEgRmlyZWJhc2Ugb2JqZWN0IHRvIGEgSmF2YVNjcmlwdCBhcnJheSAqL1xuICBfdG9BcnJheTogZnVuY3Rpb24ob2JqKSB7XG4gICAgdmFyIG91dCA9IFtdO1xuICAgIGlmIChvYmopIHtcbiAgICAgIGlmICh0aGlzLl9pc0FycmF5KG9iaikpIHtcbiAgICAgICAgb3V0ID0gb2JqO1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAodHlwZW9mKG9iaikgPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgICAgICAgIGlmIChvYmouaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgb3V0LnB1c2gob2JqW2tleV0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gb3V0O1xuICB9XG59O1xuXG4gIHJldHVybiBSZWFjdEZpcmVNaXhpbjtcbn0pKTsiLCJ2YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpLFxuICAgIEZpcmViYXNlID0gcmVxdWlyZSgnZmlyZWJhc2UnKSxcbiAgICBSZWFjdEZpcmUgPSByZXF1aXJlKCdyZWFjdGZpcmUvZGlzdC9yZWFjdGZpcmUuanMnKTtcblxudmFyIENvdW50cmllcyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtkaXNwbGF5TmFtZTogXCJDb3VudHJpZXNcIixcbiAgICBtaXhpbnM6IFtSZWFjdEZpcmVNaXhpbl0sXG5cbiAgICBnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4ge2NvdW50cmllczogW10sIHRleHQ6ICcnfTtcbiAgICB9LFxuXG4gICAgY29tcG9uZW50V2lsbE1vdW50OiBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGZpcmViYXNlUmVmID0gbmV3IEZpcmViYXNlKCcvL2NvdW50cmllcy5maXJlYmFzZWlvLmNvbScpO1xuXG4gICAgICAgIHRoaXMuYmluZEFzQXJyYXkoZmlyZWJhc2VSZWYsICdjb3VudHJpZXMnKTtcbiAgICB9LFxuXG4gICAgcmVuZGVyOiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ291bnRyeSwge2NvdW50cmllczogIHRoaXMuc3RhdGUuY291bnRyaWVzfSk7XG4gICAgfVxufSk7XG5cbnZhciBDb3VudHJ5ID0gUmVhY3QuY3JlYXRlQ2xhc3Moe2Rpc3BsYXlOYW1lOiBcIkNvdW50cnlcIixcbiAgICBnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4ge3BhZ2U6IDB9XG4gICAgfSxcblxuICAgIHByZXZQYWdlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUucGFnZSA+IDApIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIHBhZ2U6IHRoaXMuc3RhdGUucGFnZSAtIDFcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIG5leHRQYWdlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUucGFnZSA8IH5+KHRoaXMucHJvcHMuY291bnRyaWVzLmxlbmd0aCAvIDEwKSkge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgcGFnZTogdGhpcy5zdGF0ZS5wYWdlICsgMVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgcmVuZGVyOiBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGNvdW50cnlTdHlsZXMgPSB7XG4gICAgICAgICAgICAgICAgYm9yZGVyQm90dG9tOiAnMXB4IHNvbGlkICNhYWEnLFxuICAgICAgICAgICAgICAgIHBhZGRpbmc6ICcxcmVtIDJyZW0nXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICBuYXZTdHlsZXMgPSB7XG4gICAgICAgICAgICAgICAgYm9yZGVyVG9wOiAnMXB4IHNvbGlkICNhYWEnLFxuICAgICAgICAgICAgICAgIGJvcmRlckJvdHRvbTogJzFweCBzb2xpZCAjYWFhJ1xuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgZmxhZ1N0eWxlcyA9IHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6ICcxZW0nLFxuICAgICAgICAgICAgICAgIG1hcmdpblJpZ2h0OiAnLjVyZW0nXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICBuYW1lU3R5bGVzID0ge1xuICAgICAgICAgICAgICAgIG1hcmdpblJpZ2h0OiAnLjVyZW0nXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICBidXR0b25TdHlsZXMgPSB7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiAwLFxuICAgICAgICAgICAgICAgIHBhZGRpbmc6ICcxcmVtJyxcbiAgICAgICAgICAgICAgICB3aWR0aDogJzUwJScsXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnI2VlZSdcbiAgICAgICAgICAgICAgICAvKlxuICAgICAgICAgICAgICAgIGJ1dHRvbjpob3ZlcixcbiAgICAgICAgICAgICAgICBidXR0b246Zm9jdXMge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGJ1dHRvbjpob3ZlciB7XG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBidXR0b246Zm9jdXMge1xuICAgICAgICAgICAgICAgICAgICBvdXRsaW5lOiAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgY3JlYXRlSXRlbSA9IGZ1bmN0aW9uKGNvdW50cnksIGluZGV4KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwibGlcIiwge3N0eWxlOiBjb3VudHJ5U3R5bGVzLCBrZXk6IGluZGV4fSwgXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaW1nXCIsIHtzdHlsZTogZmxhZ1N0eWxlcywgc3JjOiAoJ2ZsYWdzLycgKyBjb3VudHJ5LmNjYTMgKyAnLnN2ZycpLnRvTG93ZXJDYXNlKCksIGFsdDogY291bnRyeS5uYW1lLmNvbW1vbn0pLCBcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJiXCIsIHtzdHlsZTogbmFtZVN0eWxlc30sIGNvdW50cnkubmFtZS5jb21tb24pLCBcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIG51bGwsIFwiQ2FwaXRhbDogXCIsIGNvdW50cnkuY2FwaXRhbClcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICBwcmV2ID0gdGhpcy5wcmV2UGFnZSxcbiAgICAgICAgICAgIG5leHQgPSB0aGlzLm5leHRQYWdlLFxuXG4gICAgICAgICAgICBjdXJyZW50UGFnZSA9IHRoaXMucHJvcHMuY291bnRyaWVzLnNsaWNlKHRoaXMuc3RhdGUucGFnZSAqIDEwLCB0aGlzLnN0YXRlLnBhZ2UgKiAxMCArIDEwKTtcblxuICAgICAgICByZXR1cm4oICAgICAgICAgICAgXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwidWxcIiwgbnVsbCwgXG4gICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwibGlcIiwge3N0eWxlOiBuYXZTdHlsZXN9LCBcbiAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIHtzdHlsZTogYnV0dG9uU3R5bGVzLCBvbkNsaWNrOiBwcmV2fSwgdGhpcy5zdGF0ZS5wYWdlID09PSAwID8gJ0JlZ2lubmluZyBvZiBsaXN0JyA6ICdQcmV2aW91cyBwYWdlICgnICsgdGhpcy5zdGF0ZS5wYWdlICsgJyknKSwgXG4gICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiLCB7c3R5bGU6IGJ1dHRvblN0eWxlcywgb25DbGljazogbmV4dH0sIHRoaXMuc3RhdGUucGFnZSA9PT0gfn4odGhpcy5wcm9wcy5jb3VudHJpZXMubGVuZ3RoIC8gMTApID8gJ0VuZCBvZiBsaXN0JyA6ICdOZXh0IHBhZ2UgICgnICsgKHRoaXMuc3RhdGUucGFnZSArIDIpICsgJyknKVxuICAgICAgICAgICAgICAgKSwgXG4gICAgICAgICAgICAgICBjdXJyZW50UGFnZS5tYXAoY3JlYXRlSXRlbSlcbiAgICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICB9XG59KTtcblxudmFyIFJlYWN0Q291bnRyaWVzID0gUmVhY3QuY3JlYXRlQ2xhc3Moe2Rpc3BsYXlOYW1lOiBcIlJlYWN0Q291bnRyaWVzXCIsXG5cdHJlbmRlcjogZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ291bnRyaWVzLCBudWxsKTtcblx0fVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3RDb3VudHJpZXM7XG4iXX0=
