import React ,{Component} from 'react';
import $ from 'jquery'

var NavComponent = React.createClass({
	handClick:function(){

	},
	getInitialState:function(){
		return {};
	},
	render:function(){
		return (<div className="dz_fixetop" >
                    <div className="dzs_link01">
                        <span className="icon_dzs"></span>
                        <div className="text">
                            <p className="title">挑选定制师</p>
                            我们的王牌都在这里，等您来翻牌
                        </div>
                        <span className="icon_link"></span>
                    </div>
                </div>);
	}
});
export default NavComponent;