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
			var valueLink = {
				value: this.state.filter,
				requestChange: this.handleChange
			};
			var children = [
				React.createElement(StockSearchBar, {'filter': valueLink}), 
				React.createElement(StockTable, {'filter': valueLink})
			];
			return React.createElement('div', {style: {width: '300px'}}, children);
		}
	});
});
