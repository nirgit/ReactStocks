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
		render: function() {
			if (this.lastChangeSign === 1) {
				bgColor = 'green';
			} else if (this.lastChangeSign === -1) {
				bgColor = 'red';
			} else if (this.lastChangeSign === 0) {
				bgColor = 'white';
			}
			return React.createElement('div', {
					style: {'border-top': '1px solid silver', margin: '2px 0', width: '100%', 'display': this.props.isVisible ? "block" : "none"}
				}, 
				[
					React.createElement('div', 
						{style: {display: 'inline-block', width: '50%'}}, 
						this.props.name),
					React.createElement('div', 
						{style: {display: 'inline-block', width: '50%', 'text-align': 'center', 'background-color': bgColor}}, 
						this.state.value !== -1 ? this.state.value : ""),
				]);
		}
	});
});