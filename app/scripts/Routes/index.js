import Router from 'react-router';
import React from 'react';

var {Route, DefaultRoute, RouteHandler, Link} = Router;

var App = React.createClass({
	render (){
		return (
			<div className="foo">
				<h1>Hello Flux</h1>
				<div>
					<RouteHandler></RouteHandler>
				</div>
			</div>
		);
	}
});

var routes = (
	<Route path="/" handler={App}></Route>
);


export default routes;