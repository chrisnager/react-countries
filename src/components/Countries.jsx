/** @jsx React.DOM */

var Countries = React.createClass({
    //mixins: [ReactFireMixin],

    getInitialState: function() {
        return {countries: [], text: ''};
    },

    componentWillMount: function() {
        var firebaseRef = new Firebase('//countries.firebaseio.com');

        this.bindAsArray(firebaseRef, 'countries');
    },

    onChange: function(e) {
        this.setState({text: e.target.value});
    },

    handleSubmit: function(e) {
        e.preventDefault();
        if (this.state.text && this.state.text.trim().length !== 0) {
            this.firebaseRefs['countries'].push({
                text: this.state.text
            });
            this.setState({text: ''});
        }
    },

    render: function() {
        return <Country countries={ this.state.countries } />;
    }
});








/*
                // Include for submissions just under <Country countries={…}>
                <form onSubmit={ this.handleSubmit }>
                    <input onChange={ this.onChange } value={ this.state.text } />
                    <button>{ 'Add #' + (this.state.countries.length + 1) }</button>
                </form>
*/
