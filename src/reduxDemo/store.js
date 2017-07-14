 import ReactDOM from 'react-dom';
 import {createStore} from 'redux';
 import {Provider,connect} from 'react-redux';
 import counter from './counterReduce';
 import IndexView from './indexView';
 var store=createStore(counter);

 var increaseAction={
 	type:'INCREASE',
 	playload:{
 		id:1001,
 		name:'lee'
 	}
 };
 var loadData={
 	type:"LOADDATA",
 	playload:{
 		id:1002,
 		name:'loaddata'
 	}
 };
 function mapStateToProps(state){
 	return {
 		value:state.count,
 		result:state.result
 	};
 }

 function mapDispatchToProps(dispatch,ownProps){
 	return {
 		onIncreaseClick:function(){
 			return dispatch(increaseAction);
 		},
 		onLoadData:function(){
 			return dispatch(loadData);
 		}
 	}
 }
 const App =connect(mapStateToProps,mapDispatchToProps)(IndexView);

 export {store,App};