define(['react', 'lodash', 'stocksData', 'stock', 'stockCategory'], function(React, _, StocksData, stock, stockCategory) {
	'use strict';

	return React.createClass({
		displayName: "StockTable",
		getInitialState: function() {
			var stockQuotes = StocksData.getStockQuotes();
			setInterval(this.getFreshQuotes, 2000);
			return {
				stockQuotes: stockQuotes
			};
		},
		getFreshQuotes: function() {
			var stockQuotes = StocksData.getStockQuotes();
			this.setState({'stockQuotes': stockQuotes});
		},
		render: function() {
			var rows = [];
			_.forOwn(this.state.stockQuotes, function(category, key) {
				var stocksCategory = React.createElement(stockCategory, {name: key});
				rows.push(stocksCategory);
				_.forOwn(category, function(stockValue, stockName) {
					var element = React.createElement(stock, {name: stockName, value: stockValue});
					rows.push(element);
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