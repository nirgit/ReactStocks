define([], function() {
	'use strict';

	function getQuotePrice() {
		var price = Math.random() * 100;
		price = price.toFixed(3);
		return price;
	}

	function getStockQuotes() {
		return {
		'Sports': {
			'Football': getQuotePrice(),
			'Basketball': getQuotePrice(),
			'Baseball': getQuotePrice()
			},
		'Hi-Tech': {
			'Apple': getQuotePrice(),
			'Google': getQuotePrice(),
			'Wix': getQuotePrice()
			}
		};
	}

	return {
		getStockQuotes: getStockQuotes
	};
});