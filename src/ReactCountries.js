var React = require('react'),
    Firebase = require('firebase'),
    ReactFire = require('reactfire/dist/reactfire.js');

var Countries = React.createClass({
    mixins: [ReactFireMixin],

    getInitialState: function() {
        return {countries: [], text: ''};
    },

    componentWillMount: function() {
        var firebaseRef = new Firebase('//countries.firebaseio.com');

        this.bindAsArray(firebaseRef, 'countries');
    },

    render: function() {
        return <Country countries={ this.state.countries } />;
    }
});

var Country = React.createClass({
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
                    <li style={countryStyles} key={index}>
                        <img style={flagStyles} src={('flags/' + country.cca3 + '.svg').toLowerCase()} alt={country.name.common} />
                        <b style={nameStyles}>{country.name.common}</b>
                        <span>Capital: {country.capital}</span>
                    </li>
                );
            },

            prev = this.prevPage,
            next = this.nextPage,

            currentPage = this.props.countries.slice(this.state.page * 10, this.state.page * 10 + 10);

        return(            
            <ul>
               <li style={navStyles}>
                   <button style={buttonStyles} onClick={prev}>{this.state.page === 0 ? 'Beginning of list' : 'Previous page (' + this.state.page + ')'}</button>
                   <button style={buttonStyles} onClick={next}>{this.state.page === ~~(this.props.countries.length / 10) ? 'End of list' : 'Next page  (' + (this.state.page + 2) + ')'}</button>
               </li>
               {currentPage.map(createItem)}
            </ul>
        );
    }
});

var ReactCountries = React.createClass({
	render: function() {
		return <Countries />;
	}
});

module.exports = ReactCountries;
