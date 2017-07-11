//var config=require("./config.json");
import React,{Component} from 'react';  
//import jquery from 'jquery';
import config from './config.json';
import Styles from './css/greeter.css';
//import MainCss from './css/main.css'; 
import MyCss from './css/mycss.css'; 
/**
module.exports=function(){
	var greet=document.createElement('div');
	greet.textContent=config.text;
	return greet

};
*/
 
class Greeter extends Component{
	render(){
		return (<div className>
			 {config.text}
			</div>);
		 
	}
}
export default Greeter
 