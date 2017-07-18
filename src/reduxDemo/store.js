 import ReactDOM from 'react-dom';
 import {createStore} from 'redux';
 import {Provider,connect} from 'react-redux';
 import counter from './counterReduce';
 import IndexView from './indexView';
 import {increaseAction,loadData,asyncAction,getAsyncActionFun} from './action';
 var store=createStore(counter);
 store.subscribe(function(){
 	console.log('store has change...............');

 });
 
 function mapStateToProps(state){
 	return {
 		value:state.count,
 		result:state.result,
 		set:state.set
 	};
 }

 function mapDispatchToProps(dispatch,ownProps){

 	return {
 		onIncreaseClick:function(){
 			return dispatch(increaseAction);
 		},
 		onLoadData:function(){
 			return dispatch(loadData);
 		},
 		onAsyncBt:function(){ 
 			/**
 			console.log(store);
 			console.log();
 			setTimeout(function(){
 				asyncAction.playload.data=[{id:1,name:'a'},{id:2,name:'b'}];
 				return dispatch(asyncAction);	
 			},3000);
 			*/
 			getAsyncActionFun(store.getState,function(data){ 
 				return dispatch(data);
 			});

 			
 		}
 	}
 }
 const App =connect(mapStateToProps,mapDispatchToProps)(IndexView);

 export {store,App};