define(['react'], function(React) {
	return React.createClass({
		render: function() {
			return React.createElement('div',
				{
					'style': {
						'background': 'rgba(122, 122, 225, 0.8)',
						'font-size': '1.5em',
						'font-family': 'sans-serif'
					}
				},
				this.props.name);
		}
	});
});