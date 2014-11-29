import Router from 'react-router';
import React from 'react';
import Index from './index.js';

var {Route, DefaultRoute, RouteHandler, Link} = Router;

function div(){
	console.log('this',this);
	return (
		<div className="foo">
			<h1>Hello Flux</h1>
			<div>
				{this.state.name}
				<RouteHandler></RouteHandler>
			</div>
		</div>
	);
}

var App = React.createClass({
	getInitialState : function(){
		return {
			name: 'Foogle'
		};
	},
	render: div
});

var routes = (
	<Route path="/" handler={Index}></Route>
);


export default routes;