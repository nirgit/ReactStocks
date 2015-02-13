define(['react'], function(React) {
	return React.createClass({
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
		getStockBackgroundColor: function() {
			var bgColor;
			if (this.lastChangeSign === 1) {
				bgColor = 'green';
			} else if (this.lastChangeSign === -1) {
				bgColor = 'red';
			} else if (this.lastChangeSign === 0) {
				bgColor = 'white';
			}
			return bgColor;
		},
		render: function() {
			var bgColor = this.getStockBackgroundColor();
			return React.createElement('div', {
					className: "stock",
					style: { 'display': this.props.isVisible ? "block" : "none", 'background-color': bgColor}
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