 
import React,{Component} from 'react';
import freeBannerImg from './resource/free_banner02.jpg';
import $ from 'jquery'; 
var BannerComponent = React.createClass({

	render:function(){
		return ( <div className="free_banner goToFreePoster"  ><img src={freeBannerImg} /></div> );
	}
});
export default BannerComponent;