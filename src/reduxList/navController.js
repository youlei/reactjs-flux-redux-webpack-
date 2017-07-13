import React ,{Component} from 'react';
import NavView from './navView';
import navStore from './navStore';
var NavController = React.createClass({
	handClick:function(){

	},
	getInitialState:function(){
		return navStore.getAll();
	}, 
    _toggle:function(){ 
        navStore.toggle();
        var state=navStore.getAll();
        console.log(state);
        this.setState(navStore.getAll());
    },
    componentDidMount:function(){
        var self=this;
        navStore.addToggleListener(self._toggle);
    },
    componentWillUnmount:function(){
        var self=this;
        navStore.removeToggleListener(self._toggle);
    },
	render:function(){

	   return (<NavView state={this.state}/>); 
	}
});
export default NavController;