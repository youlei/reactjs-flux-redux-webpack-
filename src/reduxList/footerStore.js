var EventEmitter=require("events").EventEmitter;
var assign=require('object-assign');
var footerStore=assign({},EventEmitter.prototype,{
    state:{
        show:false
    },
    getState:function(){
        var self=this;
        return self.state;
    },
    showTag:function(){
        this.state.show=true;
    },
    hideTag:function(){
        this.state.show=false;
    },
    emitShowTag:function(){
        this.emit("footerShowTag");
    },
    emitHideTag:function(){
        this.emit("footerHideTag");
    },
    addShowTagListener:function(callback){
        this.on("footerShowTag",callback);
    },
    removeShowTagListener:function(){
        this.removeListener("footerShowTag");
    },
    addHideTagListener:function(callback){
        this.on("footerHideTag",callback);
    },
    removeHideTagListener:function(){
        this.removeListener("footerHideTag");
    }
});
export default footerStore;

