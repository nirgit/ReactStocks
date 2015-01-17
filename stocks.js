define(['react', 'stockTable', 'StockSearchBar'], function(React, StockTable, StockSearchBar) {
	'use strict';

	return React.createClass({
		displayName: "Stocks",
		render: function() {
			var children = [React.createElement(StockSearchBar, {}), React.createElement(StockTable, {})];
			return React.createElement('div', {style: {width: '300px'}}, children);
		}
	});
});
