import React ,{Component} from 'react';
import footerAction from './footerAction';
import FooterView from './footerView';
import footerStore from './footerStore';
var FooterController = React.createClass({
	handClick:function(){ 
        footerAction.toggleFilterPanel("destination");
	},
	getInitialState:function(){
		return {};
	},
    myClick:function(){  
        footerAction.toggleFilterPanel("destination");
    },
    _showTag:function(){
        var state=footerStore.getState();
        this.setState(state);
    },
    _hideTag:function(){
        var state=footerStore.getState();
        this.setState(state);
    },
    componentDidMount:function(){
        footerStore.addShowTagListener(this._showTag);
        footerStore.addHideTagListener(this._hideTag);
    },
    componentDidUnmount:function(){
        footerStore.removeShowTagListener();
        footerStore.removeHideTagListener();
    },
	render:function(){
	   return (<FooterView state={this.state} myClick={this.myClick}/>);
	}
});
export default FooterController;