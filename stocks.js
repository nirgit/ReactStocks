define(['react', 'stockTable', 'StockSearchBar'], function(React, StockTable, StockSearchBar) {
	'use strict';

	return React.createClass({
		displayName: "Stocks",
		mixins: [React.addons.LinkedStateMixin],
		getInitialState: function() {
			return {'filter': ''};
		},
		handleChange: function(newValue) {
			this.setState({'filter': newValue});
		},
		render: function() {
			var children = [
				React.createElement(StockSearchBar, {'filterValue': this.state.filter,'onFilterChange': this.handleChange}), 
				React.createElement(StockTable, {'filter': this.state.filter})
			];
			return React.createElement('div', {style: {width: '300px'}}, children);
		}
	});
});
