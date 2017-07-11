import React from 'react';
import $ from 'jquery';

var Product=React.createClass({ 
	handlerClick:function(product,event){
		var self=this;
		//self.props.callbackParent(product);
		//console.log(event);
		//console.log(product);
		self.props.removeProduct(product);
		if(product.id==1){
			$("body").trigger("dzhide");
		}
		if(product.id==2){
			$("body").trigger("dzshow");
		}
	},
	componentWillUnmount:function(){ 
		//console.log('product unmount.............');
	},
	componentWillReceiveProps:function(){
		//console.log('componentWillReceiveProps.............');
		//console.log(this.props);
		//console.log(arguments);
	},
	render:function(){
		var self=this;
		var product = self.props.name;
		//console.log(product);
		return (<li name="product" >
				<div className="rec_img" id={product.id} onClick={this.handlerClick.bind(this,product)}><img src="https://dimg04.c-ctrip.com/images/300r0e000000722r03E82.jpg" />
					<div className="text"><h4>{product.title}</h4><p className="rec_tit">{product.minTitle}</p></div>
				</div>
				<div className="rec_detail">
                    <p>{product.description}</p>
                </div>
                </li>);
	}
});
export default Product;