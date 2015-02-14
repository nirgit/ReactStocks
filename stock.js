define(['react'], function(React) {

	var cx = React.addons.classSet;

	return React.createClass({
		displayName: "Stock",
		getInitialState: function() {
			this.isInit = true;
			this.lastChangeSign = 0;
			return {'value': -1};
		},
		componentWillReceiveProps: function(nextProps) {
			if (this.state.value !== -1) {
				this.isInit = false;
			}
			this.lastChangeSign = Math.sign(nextProps.value - this.state.value);
			this.setState({'value': nextProps.value});
		},
		getStockStyle: function() {
			var classes = cx({
				'stock': true,
				'stock-price-up': this.lastChangeSign === 1,
				'stock-price-down': this.lastChangeSign === -1
			});
			return classes;
		},
		render: function() {
			var stockClasses = this.getStockStyle();
			return React.createElement('div', {
					className: stockClasses,
					style: { 'display': this.props.isVisible ? "block" : "none"}
				}, 
				[
					React.createElement('div', 
						{style: {display: 'inline-block', width: '50%'}}, 
						this.props.name),
					React.createElement('div', 
						{style: {display: 'inline-block', width: '50%', 'text-align': 'center'}}, 
						this.state.value !== -1 ? this.state.value : ""),
				]);
		}
	});
});