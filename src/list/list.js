import React from 'react';
import $ from 'jquery';
import Product from './product';
var loop=20;
var List=React.createClass({
	getDefaultProps:function(){
		console.log('getDefaultProps...........');
		return null;
	},
	getInitialState:function(){
		console.log('getInitialState...........');
		var list=[];
		for(var i=0;i<10;i++){
			list.push({
					id:i,
					title:'倾力打造专属定制亚龙湾亲子度假旅行'+i,
					minTitle:i+'天•海南三亚',
					imgUrl:'',
					description:'专业定制管家负责全程活动策划及游玩安排，一站式服务，专业无忧'+i,
					url:''
				} )	;
		}
		return {
			list:list,
			loop:loop
		};
	},
	handlerRemoveProduct:function(product){ 
		var self=this;
		var result=self.state;
	 	var r = $.grep(result.list,function(n,i){
	 		return  n.id!=product.id;
	 	}); 
	 	loop++;
	 	self.setState({list:r});
	 	self.setState({loop:loop});
	 	
	},
	componentWillMount:function(){ 
		console.log('componentWillMount.............');
	},
	componentDidMount:function(){
		this.bindScroll();
		console.log('componentDidMount.............');
	},
	componentWillUpdate:function(){
		console.log('componentWillUpdate.............');
	},
	componentDidUpdate:function(){
		console.log('componentDidUpdate.............');
	},
	// 在任意时刻组件的props 都可以通过父辈的组件更改，
	// 当收到新的props 会触发该函数，我们同事获取更改props对象和更行state 的机会
	componentWillReceiveProps:function(){
		console.log('componentWillReceiveProps.............');
	},
	//该方法用来拦截props 和state ，然后开发这个根据自己的逻辑做出要不要render 的决定让他更快
	shouldComponentUpdate:function(){
		console.log('shouldComponentUpdate.............');
		return true;
	},
	componentWillUnmount:function(){
		console.log('componentWillUnmount.............');
	},
	bindScroll:function(){
		var self=this;
		$(window).scroll(function (e) {
            if ($(window).scrollTop() + $(window).height() == $(document).height()) {
            	loop++;
            	var list = self.state.list;
            	list.push({
					id:loop,
					title:'倾力打造专属定制亚龙湾亲子度假旅行'+loop,
					minTitle:loop+'天•海南三亚',
					imgUrl:'',
					description:'专业定制管家负责全程活动策划及游玩安排，一站式服务，专业无忧'+loop,
					url:''
				});
				self.setState({list:list});
            }
        });
	},
	render:function(){
		var self=this;
		var list;
		console.log(this.state);
		if(self.state){
			list=self.state.list;
		}else{
			list=self.getInitlizalState().list;	
		}
		return ( <ul className="rec_list" id="productList" >
						{
							list.map(function(product){
								return <Product name={product} key={product.id} loop={self.state.loop} product={product} removeProduct={self.handlerRemoveProduct}/>
							})
						}
                     </ul>);
	}
});
export default List;