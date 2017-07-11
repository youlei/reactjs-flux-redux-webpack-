import React,{Component} from 'react';
import ReactDom from 'react-dom';
import $ from 'jquery';
import NavCom from './nav';
import List from './list';
import DingzhiButton from './dingzhiButton';
import DingzhiButtonController from './buttonController';
import NavController from './navController';
import FooterController from './FooterController';
 
ReactDom.render(
	<NavController />,
	$("#nav")[0]
	);

ReactDom.render(
	<List />,
	$("#list")[0]
	);

ReactDom.render(
	<DingzhiButtonController/>,
	$("#dingzhiButton")[0]
	);
 ReactDom.render(
 	<FooterController />,
 	$("#footer")[0]
 	);