import React from 'react';

/*
 @doc

 */

var CuisineElement = React.createClass({
	render (){
		var cuisine = this.props.source;
		return (<div className="cuisine">
					<label>{cuisine}</label>
				</div>);
	}
});

export default CuisineElement;