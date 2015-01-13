define(['react'], function(React) {
	return React.createClass({
		render: function() {
			return React.createElement('div', {
					style: {'border-top': '1px solid silver', margin: '2px 0', width: '100%'}
				}, 
				[
					React.createElement('div', 
						{style: {display: 'inline-block', width: '50%'}}, 
						this.props.name),
					React.createElement('div', 
						{style: {display: 'inline-block', width: '50%', 'text-align': 'center'}}, 
						this.props.value),
				]);
		}
	});
});