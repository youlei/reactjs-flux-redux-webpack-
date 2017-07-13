import React ,{Component} from 'react';
import $ from 'jquery'

var DingzhiButtonComponent = React.createClass({
	handClick:function(){

	},
    componentDidMount:function(){
        var self=this;
        $("body").on("dzhide",function(){
            self.setState({
                show:'none'
            });
        });
         $("body").on("dzshow",function(){
            self.setState({
                show:'block'
            });
        });
    },
	getInitialState:function(){
		return {
            show:"block"
        };
	},
	render:function(){
		return (<a href="javascript:void(0)" style={{display:this.state.show}} id="gotoDemand" className="add_helper" title="定制旅行">定制旅行</a>);
	}
});
export default DingzhiButtonComponent;