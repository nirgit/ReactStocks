define(['react', 'lodash', 'stocksData'], function(React, _, StocksData) {
	'use strict';

	return React.createClass({
		displayName: "StockTable",
		render: function() {
			var rows = [];
			_.forOwn(StocksData, function(category, key) {
				rows.push(key);
				_.forOwn(category, function(stockValue, stockName) {
					rows.push(stockName + " " + stockValue);
				});
			});
			var props = {
				style: {
					'border': '1px solid green'
				}
			};
			return React.createElement('div', props, rows);
		}
	});
});