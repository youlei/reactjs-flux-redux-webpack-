var EventEmitter=require("event").EventEmitter
var assgin =require("assign-object");

var filterPanelStore=assgin({},EventEmitter.prototype,{
  state:{
    show:'none'
  },
  getState:function(){
    return state;
  },
  emitToggle:function(){
    this.emit("filterToggle");
  },
  addFilterToggleListener:function(callback){
    this.on('filterToggle',callback);
  },
  removeFilterToggleListener:function(){
    this.removeListener("filterToggle");
  },

});

export default footerView;