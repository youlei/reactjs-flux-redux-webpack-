import React from 'react';

var IndexView=React.createClass({

	render:function(){
		var value=this.props.value;
		var onIncreaseClick=this.props.onIncreaseClick;
		var onLoadData=this.props.onLoadData;
		var data=this.props.result||[];
		return(<div>
			<span>{value}</span>
			{
				data.map(function(p){
					return <div><span>{p.id}</span><span>{p.name}</span></div>
				})
			}
			<button onClick={onLoadData}> loadData </button>
			<button onClick={onIncreaseClick}>increaseBt</button>
			</div>);
	}
});
/**
IndexView.propTypes={
	value:PropTypes.number.isRequired,
	onIncreaseClick:PropTypes.func.isRequired

};
*/
export default IndexView;