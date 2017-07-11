import React ,{Component} from 'react';
import filterPanelAction from './filterPanelAction';
import filterStore from './filterPanelStore';
import FilterPanelView from './FilterPanelView';
var FilterPanelController=React.createClass({
  getInitialState:function(){
    var self=this;
     return filterStore.getState();
  },
  _toggle:function(){
    var state = filterStore.getState();
    console.log('_toggle............');
    if(state.show=="none"){
      state.show="block";
    }else{
      state.show="none";
    }
    this.setState(state);
  },
  _show:function(){
    var state={show:'block'};
    this.setState(state);
  },
  _hide:function(){
    var state={show:'none'};
    this.setState(state);
  },
  _filterQuery:function(){

  },
  _loadDestination:function(){
    var self=this;
    /**
    filterStore.getLoadDestination(function(){
      var state=filterStore.getState();
      console.log(11111111);
      console.log(state);
      self.setState();
    });
    */
    console.log(filterStore.getState());
    self.setState(filterStore.getState());
  },
  componentDidMount:function(){ 
    filterStore.addFilterToggleListener(this._toggle);
    filterStore.addFilterQuery(this._filterQuery);
    filterStore.addShowListener(this._show);
    filterStore.addHideListener(this._hide);
    filterStore.addLoadDestination(this._loadDestination);
    //filterStore.addLoadTheme();
    //filterStore.addLoadDay();
  },
  componentWillUnmount:function(){ 
    filterStore.removeFilterToggleListener(this._toggle);
    filterStore.removeFilterQuery();
    filterStore.removeShowListener();
    filterStore.removeHideListener();
  },
  handleCancel:function(){
    filterPanelAction.cancel();
  },
  handleOK:function(){
    filterPanelAction.ok();
  },
  handleChangeTab:function(e){
    var self=this;
    var state=self.state;
    for(var i of state.destination){
      if(i.name==e.name){
        i.check=true;
      }else{
        i.check=false;
      }
    } 
    self.setState(state);
  },
  handleCheckArea:function(areas){
    var self=this;
    var state=self.state;
    for(var i of state.destination){
      if(i.check){
        for(var j of i.area){
          if(j.name==areas.name){
            j.selected=j.selected? false:true;
          }
        }
      }
    } 
    self.setState(state);
  },
  render:function(){ 
    return (<FilterPanelView state={this.state} handleCancel={this.handleCancel} handleOK={this.handleOK} changeTab={this.handleChangeTab} checkArea={this.handleCheckArea}/>);
  }
});
export default FilterPanelController;