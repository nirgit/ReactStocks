define(['lodash', 'react'], function(_, React) {
	return React.createClass({
		displayName: "StockSearchBar",
		onFilterChange: function(evt) {
			this.props.onFilterChange(evt.target.value);
		},
		render: function() {
			var searchField = React.createElement("input", 
				{
					"type": "text", 
					"onChange": this.onFilterChange,
					"value": this.props.filterValue
				});
			return React.createElement("div", {
				style: {
					'margin': '5px 0'
				}
			}, ["Search stock: ", searchField]);
		}
	});
});