import React from 'react';

var GenericListElement = React.createClass({
	getInitialState(){
		return {
			active: false
		}
	},
	render(){
		return (
			<div className="list-element">
				<this.props.renderer source={this.props.source}></this.props.renderer>
			</div>
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

		listElements = this.props.source.map(function(element){
			return (
						<GenericListElement 
							onClick={onClick} 
							renderer={elementRenderer} 
							source={element}/>
					);
		});

		return (
			<div className="list-view">
				<div className="list-view-inner">
					{listElements}
				</div>
			</div>
		);
	}
});

export {GenericList as List,
		GenericListElement as GenericListElement};