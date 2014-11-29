import React from 'react';
import {List} from '../partials/listview';
import CuisineElement from '../partials/cusineelement';

export default function IndexPage(){
	return (
		<section>
			<div className="container">
				<List source={this.state.cusines} elementRenderer={CuisineElement}></List>
			</div>
		</section>
	);
}
