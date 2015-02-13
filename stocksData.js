define(['lodash'], function(_) {
	'use strict';

	var quotesData = null;
	var isFirstTime = true;

	var stocksToUpdate = {
		"Food": ["McDonalds", "Kraft", "Heinz", "KFC"],
		"Sports": ['Football', 'Basketball', 'Baseball', 'NBA', 'NFL', 'NHL', 'Fifa'],
		"Technology": ['Apple', 'Google', 'Wix', 'Microsoft', 'Texas Instruments', 'Dell', 'Intel', 'IBM', 'HP', 'Deloitte'],
		"Fun": ['Lexy Inc.', 'Funster', 'EA Sports', 'Play!']
	}

	function shouldUpdate() {
		if (isFirstTime) {
			return true;
		}
		return Math.random() < 0.5;
	}

	function getQuotePrice(lastPrice) {
		if (!lastPrice) {
			var price = Math.random() * 100;
			price = price.toFixed(3);
			return price;
		} else {
			return Math.max(0.01, (parseFloat(lastPrice) + (Math.random() > 0.5 ? 1 : -1) * Math.random() * 10).toFixed(3));
		}
	}

	function getStockQuotes() {
		quotesData = quotesData || {};
		_.forOwn(stocksToUpdate, function(stocks, category) {
			if (shouldUpdate()) {
				quotesData[category] = quotesData[category] || {};
				_.forEach(stocks, function(stock) {
					if (shouldUpdate()) {
						quotesData[category][stock] = getQuotePrice(quotesData[category][stock]);
					}
				});
			}
		});
		if (isFirstTime) { 
			isFirstTime = false;
		}
		return quotesData;
	}

	return {
		getStockQuotes: getStockQuotes
	};
});