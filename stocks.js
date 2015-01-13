define(['react', 'stockTable'], function(React, StockTable) {
	'use strict';

	return React.createClass({
		displayName: "Stocks",
		render: function() {
			var children = ["Search Bar", React.createElement(StockTable, {})];
			return React.createElement('div', {style: {width: '300px'}}, children);
		}
	});
});
