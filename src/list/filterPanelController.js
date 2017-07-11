import React ,{Component} from 'react';
import filterStore form './filterStore';
import FilterPanelView from './FilterPanelView';
var FilterPanelController=React.createClass({
  getInitialState:function(){
     return filterStore.getState();
  },
  componentDidMount:function(){
    //filterStore.
  },
  render:function(){
    return (<FilterPanelView />);
  }
});
export default FilterPanelController;