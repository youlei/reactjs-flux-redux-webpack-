import React ,{Component} from 'react';
//import myDispatcher from '../myDispatcher';
//import listStore from '../listStore';
import ButtonView from './buttonView';
import buttonAction from './buttonAction';
import $ from 'jquery';
 /**
var DingzhiButtonController = React.createClass({
	handClick:function(){

	},
   
    getInitialState:function(){
        return {
            items:listStore.getAll()
        };
    },
    _onChange:function(){
        this.setState({
            items:listStore.getAll();
        });
    },
    componentWillUnmount:function(){
        listStore.removeChangeListener(this._onChange);
    },
    componentDidMount:function(){
        listStore.addChangeListener(this._onChange);  
    },
    
    btClick:function(){
        //buttonView.addNewItem("add Item");
    }, 
	render:function(){
		//return (<ButtonView onClick={this.btClick} />);
        return (<a href="javascript:void(0)" style={{display:this.state.show}} id="gotoDemand" className="add_helper" title="定制旅行">定制旅行</a>);
	}
});
export default DingzhiButtonController;
*/
 
var DingzhiButtonController = React.createClass({
    handClick:function(){ 
        buttonAction.addNewItem("this is add button");
    }, 
    getInitialState:function(){
        return {
            show:"block"
        };
    },
    render:function(){
        //return (<a href="javascript:void(0)" style={{display:this.state.show}} id="gotoDemand" className="add_helper" title="定制旅行">定制旅行</a>);
        return (<ButtonView  state={this.state} onClick={this.handClick}/>);
    }
});
export default DingzhiButtonController;
 