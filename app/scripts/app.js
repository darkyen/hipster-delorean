import React from 'react';
import router from './core/Router.js';
import Promise from 'bluebird';
import request from 'browser-request';


class App{
	
	constructor(router, appRoot){
		this.router = router;
		this.appRoot = appRoot;
		this.router.run(this.routerInitialized);
		this.http = Promise.promisifyAll(request);
	}
	
	routerInitialized (Handler, state){
		console.log(state);
		React.render(<Handler />, this.appRoot);
	}
}

var app = new App(router, document.body);

export default app; 