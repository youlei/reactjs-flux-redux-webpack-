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
 var asyncAction={
 	type:"ASYNCBT",
 	playload:{
 		id:1003,
 		name:'asyncAction'
 	}
 };
 function getAsyncActionFun(state,callback){
 	var asyncAction={
 		type:"ASYNCBT",
	 	playload:{
	 		id:1003,
	 		name:'asyncAction'
	 	}
 	};
 	setTimeout(function(){
 		asyncAction.playload.data={id:'x10123123',name:'lyou'};
 		callback(asyncAction);
 	},3000);
 }
 export {increaseAction,loadData,asyncAction,getAsyncActionFun};