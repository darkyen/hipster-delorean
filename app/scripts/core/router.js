import routes from './../Routes/all.js';
import Router from 'react-router';

var router = Router.create({
	routes: routes,
	location: Router.HistoryLocation
});

export default router;