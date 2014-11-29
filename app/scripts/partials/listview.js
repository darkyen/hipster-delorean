import React from 'react';

var GenericListElement = React.createClass({
	getInitialState(){
		return {
			active: false
		}
	},
	render(){
		return (
			<li className="list-element">
				<this.props.renderer source={this.props.source}></this.props.renderer>
			</li>
		);
	}
});

var GenericList = React.createClass({
	getInitialState: function(){
		return {
			activeElement: -1
		}
	},
	render: function(){
		var elementRenderer = this.props.elementRenderer;		
		var onClick = this.props.onClick;
		var listElements = this.props.source.map(function(element){
			return (
					<GenericListElement 
						onClick={onClick} 
						renderer={elementRenderer} 
						source={element}/>
			);
		});

		return (
			<div className="list-view">
				<ul className="list-unstyled list-inline list-view-inner">
					{listElements}
				</ul>
			</div>
		);
	}
});

export {GenericList as List,
		GenericListElement as GenericListElement};