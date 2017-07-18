var assign=require('object-assign');
var counter=function(state={count:0},action){
	const count=state.count;
	switch(action.type){
		case 'INCREASE':
			return assign({},state,{count:count+1});
		case 'LOADDATA':
			var tmp=state.result||[];
			var start=tmp.length;
			var length=tmp.length+2;
			for(var i=start;i<length;i++){
				var p={
					id:i,
					name:'name_'+i
				};
				tmp.push(p);
			}
			return assign({},state,{result:tmp,count:state.count,set:tmp});
		case "ASYNCBT":
			console.log("state async load.................");
			console.log(action);
			var newResult=assign({},state,{result:action.playload.data});
			return newResult;
		default:
			return state;
	}
};
export default counter;