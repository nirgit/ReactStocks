define(['lodash', 'react'], function(_, React) {
	return React.createClass({
		displayName: "StockSearchBar",
		getInitialState: function() {
			return {'searchText': ''};
		},
		render: function() {
			var searchField = React.createElement("input", 
				{
					"type": "text", 
					"onChange": function(evt) {
						this.setState({'searchText': evt.target.value});
					}
			}, this.state.searchText);
			return React.createElement("div", {}, ["Search stock: ", searchField]);
		}
	});
});