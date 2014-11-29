import React from 'react';
import IndexPage from '../views/index.js';

console.log(IndexPage);

var IndexController = React.createClass({
	
	getInitialState: function(){
		return {
			cusines: ['veg', 'non-veg', 'goan']
		}
	},

	render: IndexPage
});

export default IndexController;