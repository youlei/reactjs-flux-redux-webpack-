var EventEmitter=require('events').EventEmitter;
var assign=require('object-assign');
var $=require("jquery");

var filterPanelStore=assign({},EventEmitter.prototype,{
  state:{
    show:'none',
    destination:[],
    other:[],
    current:null
  },
  getState:function(){
    return this.state;
  },
  getLoadDestination:function(callback){
    var self=this;
    setTimeout(function(){
      var destination={
        name:"东南亚",
        check:true,
        area:[
          {name:'泰国',id:'1',selected:false},
          {name:'老挝',id:'2',selected:false},
          {name:'越南',id:'3',selected:false},
          {name:'缅甸',id:'4',selected:false},
          {name:'菲律宾',id:'5',selected:false},
          {name:'马拉西亚',id:'6',selected:false},
          {name:'印度尼西亚',id:'7',selected:false},
          {name:'新加坡',id:'8',selected:false}
        ]
      };

      var destination1={
        name:"美洲",
        area:[
          {name:'美国',id:'9',selected:false},
          {name:'加拿大',id:'10',selected:false},
          {name:'墨西哥',id:'11',selected:false}
        ]
      }

      self.state.destination=[destination,destination1];
      if($.isFunction(callback)){
        callback();  
      }
      
    },3000);
  },
  showFilterPanel:function(){
    this.state.show="block";
  },
  hideFilterPanel:function(){
    this.state.show="none";
  },
  emitLoadDestination:function(){
    this.emit("loadDestination");
  },
  addLoadDestination:function(callback){
    this.on("loadDestination",callback);
  },
  addLoadTheme:function(callback){
    this.on("loadTheme",callback);
  },
  addLoadDay:function(callback){
    this.on("loadDay",callback);
  },
  removeLoadDestination:function(callback){
    this.removeListener("loadDestination");
  },
  removeLoadTheme:function(callback){
    this.removeListener("loadTheme");
  },
  removeLoadDay:function(callback){
    this.removeListener("loadDay");
  },
  emitToggle:function(){
    this.emit("filterToggle");
  },
  emitShow:function(){
    this.emit("filterShow");
  },
  emitHide:function(){
    this.emit("filterHide");
  },
  addFilterQuery:function(callback){
    this.emit("filterQuery");
  },
  removeFilterQuery:function(callback){
    this.removeListener("filterQuery",callback);  
  },
  addFilterToggleListener:function(callback){ 
    this.on('filterToggle',callback);
  },
  removeFilterToggleListener:function(callback){ 
    this.removeListener("filterToggle",callback);
  },
  addShowListener:function(callback){
    this.on("filterShow",callback);
  },
  addHideListener:function(callback){
    this.on("filterHide",callback);
  },
  removeShowListener:function(callback){
    this.removeListener("filterShow",callback);
  },
  removeHideListener:function(callback){
    this.removeListener("filterHide",callback);
  },

});

export default filterPanelStore;