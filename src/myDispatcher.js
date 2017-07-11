 var Dispatcher =require("flux").Dispatcher;
import listStore from './list/buttonStore'; 
import navStore from './list/navStore';
var myDispatcher=new Dispatcher();

myDispatcher.register(function(action){
	switch(action.actionType){
		case 'ADD_NEW_ITEM':
			listStore.addNewItemHandler(action.text);
			listStore.emitChange();
			navStore.emitToggle();
			break;
		default:

	}
});

export default myDispatcher;