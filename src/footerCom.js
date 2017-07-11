 
import React,{Component} from 'react';
import $ from 'jquery';
/**
class FooterComponent extends Component{
	getInitialState(){
		return {
			display:'none'
		}
	}

	render(){

		return (<div className="f-footer v2_footer" display={this.state}>
                    <span className="item_index gotoHome ">首页</span>
                    <span className="item_case gotoIndex on">定制案例</span>
                    <span className="item_message gotoMsg">消息</span> 
                    <span className="item_order gotoOrder">订单</span>
                </div>);
	}
}
export default FooterComponent;
*/
var FooterComponent = React.createClass({

	getInitialState:function(){
		return {
			gotoHome:"on",
			gotoIndex:'',
			gotoMsg:'',
			gotoOrder:''
		};
	},
	clearState:function(){
		var self=this;
		self.setState({
			gotoHome:"",
			gotoIndex:'',
			gotoMsg:'',
			gotoOrder:''
		});
	},
	handleClick:function(e){
		var self=this;
		self.clearState();
		var $span = $(e.target);
		if($span.hasClass("gotoHome")){
			self.setState({
				gotoHome:"on"
			});
		}else if($span.hasClass("gotoIndex")){
			self.setState({
				gotoIndex:"on"
			});
		}else if($span.hasClass("gotoMsg")){
			self.setState({
				gotoMsg:"on"
			});
		}else if($span.hasClass("gotoOrder")){
			self.setState({
				gotoOrder:"on"
			});
		}
	},
	componentWillMount:function(){

	},
	render:function(){
		return (<div className="f-footer v2_footer" >
                    <span className={"item_index gotoHome "+ this.state.gotoHome}   onClick={this.handleClick}>首页</span>
                    <span className={"item_case gotoIndex "+ this.state.gotoIndex}   onClick={this.handleClick}>定制案例</span>
                    <span className={"item_message gotoMsg "+ this.state.gotoMsg}  onClick={this.handleClick}>消息</span> 
                    <span className={"item_order gotoOrder "+ this.state.gotoOrder}   onClick={this.handleClick}>订单</span>
                </div>);
	}
});
export default FooterComponent;