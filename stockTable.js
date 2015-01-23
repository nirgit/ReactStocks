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
			var mergedState = _.merge(this.state.stockQuotes, stockQuotes);
			this.setState({'stockQuotes': mergedState});
		},
		isStockVisible: function(stockName) {
			if (!stockName) {
				return false;
			}
			var filter = this.props.filter;
			filter = filter.toLowerCase();
			return stockName.toLowerCase().indexOf(filter) !== -1;
		},
		render: function() {
			var $this = this;
			var rows = [];
			_.forOwn(this.state.stockQuotes, function(category, key) {
				var stocksCategory = React.createElement(stockCategory, {name: key});
				rows.push(stocksCategory);
				_.forOwn(category, function(stockValue, stockName) {
					var stockVisibility = $this.isStockVisible(stockName);
					var element = React.createElement(stock, {name: stockName, value: stockValue, isVisible: stockVisibility});
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