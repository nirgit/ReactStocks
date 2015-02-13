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
				var stockRows = [];
				var stocksCategory = React.createElement(stockCategory, {name: key});
				stockRows.push(stocksCategory);
				var stocksVisibleInCategory = 0;
				_.forOwn(category, function(stockValue, stockName) {
					var stockVisibility = $this.isStockVisible(stockName);
					var element = React.createElement(stock, {name: stockName, value: stockValue, isVisible: stockVisibility});
					stockRows.push(element);
					stocksVisibleInCategory += stockVisibility ? 1 : 0;
				});
				if (stocksVisibleInCategory > 0) {
					rows = rows.concat(stockRows);
				}
			});
			var props = {
				style: {
					'border': '1px solid green'
				}
			};
			if (rows.length > 0) {
				return React.createElement('div', props, rows);
			} else {
				return React.createElement('div', props, "No stocks match '" + this.props.filter + "'");
			}
		}
	});
});