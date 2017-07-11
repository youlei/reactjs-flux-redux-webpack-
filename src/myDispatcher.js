 var Dispatcher =require("flux").Dispatcher;
import listStore from './list/buttonStore'; 
import navStore from './list/navStore';
import footerStore from './list/footerStore';
import filterPanelStore from './list/filterPanelStore';

var myDispatcher=new Dispatcher();

myDispatcher.register(function(action){
	switch(action.actionType){
		case 'ADD_NEW_ITEM':
			listStore.addNewItemHandler(action.text);
			listStore.emitChange();
			navStore.emitToggle();
			break;
		case 'toggleFilterPanel':
			//filterPanelStore.emitLoadDestination();
			filterPanelStore.emitToggle();
		    break;
		case 'filterCancel':
			 filterPanelStore.hideFilterPanel();
			 filterPanelStore.emitHide();
			 var state = filterPanelStore.getState();
			 var flag=false;
			 /**
			 c:for(var dest of state.destination){
			 	for(var a of dest.area ){
			 		if(a.selected){
			 			flag=true;
			 			break c;
			 		}
			 	}
			 }
			 */
			 for(var i=0; i<state.destination.length;i++){
			 	var dest=state.destination[i].area;
			 	for(var j =0;j<dest.length;j++){
			 		if(dest[j].selected){
			 			flag=true;		
			 		}
			 	}
			 }
			 if(flag){
			 	footerStore.showTag();
			 	footerStore.emitShowTag();
			 }else{
			 	footerStore.hideTag();
			 	footerStore.emitHideTag();
			 }
		    break;
		case 'filterOK':
			 filterPanelStore.hideFilterPanel();
			 filterPanelStore.getLoadDestination(function(){
			 	filterPanelStore.emitLoadDestination();	
			 });

			 filterPanelStore.emitHide();
			 
		    break;
		case 'loadDestination':

		default:

	}
});

export default myDispatcher;