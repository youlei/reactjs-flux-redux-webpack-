import React from 'react';

var IndexView=React.createClass({

	render:function(){
		var value=this.props.value;
		var onIncreaseClick=this.props.onIncreaseClick;
		var onLoadData=this.props.onLoadData;
		var onAsyncBt=this.props.onAsyncBt;
		var data=this.props.set||[];
		return(<div>
			<span>{value}</span>
			{
				data.map(function(p){
					return <div key={p.id}><span>{p.id}</span><span>{p.name}</span></div>
				})
			}
			<button onClick={onLoadData}> loadData </button>
			<button onClick={onIncreaseClick}>increaseBt</button>
			<button onClick={onAsyncBt.bind(this,{product:'xxttoo',pid:1001})}>asyncBt</button>
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