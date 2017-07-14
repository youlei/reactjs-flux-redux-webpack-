var assign=require('object-assign');
var counter=function(state={count:0},action){
	const count=state.count;
	switch(action.type){
		case 'INCREASE':
			return assign({},state,{count:count+1});
		case 'LOADDATA':
			var tmp=state.result||[];
			for(var i=0;i<2;i++){
				var p={
					id:i,
					name:'name_'+i
				};
				tmp.push(p);
			}
			return assign({},state,{result:tmp,count:state.count});
		default:
			return state;
	}
};
export default counter;