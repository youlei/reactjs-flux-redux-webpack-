var EventEmitter=require('events').EventEmitter;
var assign=require('object-assign');
var buttonStore=assign({},EventEmitter.prototype,{
	items:[],
	getAll:function(){
		return this.items
	},
	addNewItemHandler:function(text){
		this.items.push(text);
	},
	emitChange:function(){
		this.emit('change');
	},
	addChangeListener:function(callback){
		this.on('change',callback);
	},
	removeChangeListener:function(){
		this.removeListener('change',callback);
	}
});
export default buttonStore;