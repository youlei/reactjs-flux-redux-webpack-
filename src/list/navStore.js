import React ,{Component} from 'react';
var EventEmitter=require('events').EventEmitter;
var assign=require('object-assign');
var navStore= assign({},EventEmitter.prototype,{
    items:{
        show:"block"
    },
    getAll:function(){
        return this.items;
    },
    toggle:function(){   
        if(this.items.show=="block"){
            this.items.show="none";
        }else{
            this.items.show="block";
        }
      
    },
    emitToggle:function(){
        var self=this;
        self.emit("toggleNav");
    },
    addToggleListener:function(callback){
        console.log('navStore.................toggle event');
        this.on("toggleNav",callback);
    },
    removeToggleListener:function(callback){
        console.log('navStore.................remove toggle event');
        this.removeListener("toggleNav",callback);
    }
});
export default navStore;
