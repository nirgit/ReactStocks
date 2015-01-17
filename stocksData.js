define(['lodash'], function(_) {
	'use strict';

	var isFirstTime = true;

	var stocksToUpdate = {
		"Sports": ['Football', 'Basketball', 'Baseball'],
		"Hi-Tech": ['Apple', 'Google', 'Wix']
	}

	function shouldUpdate() {
		if (isFirstTime) {
			return true;
		}
		return Math.random() < 0.45;
	}

	function getQuotePrice() {
		var price = Math.random() * 100;
		price = price.toFixed(3);
		return price;
	}

	function getStockQuotes() {
		var quotes = {};
		_.forOwn(stocksToUpdate, function(stocks, category) {
			if (shouldUpdate()) {
				quotes[category] = {};
				_.forEach(stocks, function(stock) {
					if (shouldUpdate()) {
						quotes[category][stock] = getQuotePrice();
					}
				});
			}
		});
		if (isFirstTime) { 
			isFirstTime = false;
		}
		return quotes;
	}

	return {
		getStockQuotes: getStockQuotes
	};
});