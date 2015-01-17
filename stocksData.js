define(['lodash'], function(_) {
	'use strict';

	var isFirstTime = true;

	var stocksToUpdate = {
		"Food": ["McDonalds", "Kraft", "Heinz", "KFC"],
		"Sports": ['Football', 'Basketball', 'Baseball', 'NBA', 'NFL', 'NHL', 'Fifa'],
		"Technology": ['Apple', 'Google', 'Wix', 'Microsoft', 'Texas Instruments', 'Dell', 'Intel', 'IBM', 'HP', 'Deloitte']
	}

	function shouldUpdate() {
		if (isFirstTime) {
			return true;
		}
		return Math.random() < 0.75;
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