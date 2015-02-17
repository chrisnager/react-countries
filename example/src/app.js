var React = require('react'),
	ReactCountries = require('react-countries');

var App = React.createClass({
	render: function() {
		return <ReactCountries />
	}
});

React.render(<App />, document.getElementsByTagName('main')[0]);
