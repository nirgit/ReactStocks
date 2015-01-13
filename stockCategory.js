define(['react'], function(React) {
	return React.createClass({
		render: function() {
			return React.createElement('div',
				{
					'style': {
						'background': 'rgba(225, 122, 122, 0.8)',
						'font-size': '1.5em',
						'font-family': 'sans-serif'
					}
				},
				this.props.name);
		}
	});
});