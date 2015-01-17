define(['lodash', 'react'], function(_, React) {
	return React.createClass({
		displayName: "StockSearchBar",
		getInitialState: function() {
			return {'searchText': ''};
		},
		onFilterChange: function(evt) {
			this.props.filter.requestChange(evt.target.value);
		},
		render: function() {
			var searchField = React.createElement("input", 
				{
					"type": "text", 
					"onChange": this.onFilterChange
			}, this.state.searchText);
			return React.createElement("div", {}, ["Search stock: ", searchField]);
		}
	});
});