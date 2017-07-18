 import ReactDOM from 'react-dom';
 import React from 'react';
 import {createStore} from 'redux';
 import {Provider,connect} from 'react-redux'; 
 import {App,store} from './store';
ReactDOM.render(
 	<Provider store={store}>
 		<App />
 	</Provider>,
 	document.getElementById('root')
 	);

/**
function* generatorFun(){
	yield 'hello';
	yield 'world';
	return 'xxx';
}

var result= generatorFun();
console.log( result.next());
console.log( result.next());
console.log( result.next());
*/