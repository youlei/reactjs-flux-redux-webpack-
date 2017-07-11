 
import React,{Component} from 'react';
import $ from 'jquery'; 
var AreaComponent = React.createClass({
	getAreaData:function(type){
		var self=this,
			result={};
		var fristArr=[
			{id:'1',name:'国内',imgUrl:'https://pic.c-ctrip.com/h5/mice/dingzhi/rmqy_17.png',url:''},
			{id:'2',name:'日本',imgUrl:'https://pic.c-ctrip.com/h5/mice/dingzhi/rmqy_15.png',url:''},
			{id:'3',name:'港澳台',imgUrl:'https://pic.c-ctrip.com/h5/mice/dingzhi/rmqy_03.png',url:''},
			{id:'4',name:'东南亚',imgUrl:'https://pic.c-ctrip.com/h5/mice/dingzhi/rmqy_16.png',url:''}
		];
		var secArr=[
			{id:'5',name:'欧洲',imgUrl:'https://pic.c-ctrip.com/h5/mice/dingzhi/rmqy_05.png',url:''},
			{id:'6',name:'美洲',imgUrl:'https://pic.c-ctrip.com/h5/mice/dingzhi/rmqy_09.png',url:''},
			{id:'7',name:'澳中东非',imgUrl:'https://pic.c-ctrip.com/h5/mice/dingzhi/rmqy_07.png',url:''},
			{id:'8',name:'周边',imgUrl:'https://pic.c-ctrip.com/h5/mice/dingzhi/rmqy_18.png',url:''}
		];
		result.fristArr=fristArr;
		result.secArr=secArr;
		return result
	},
	handleClick:function(e){
		var self=this,
			$span = $(e.currentTarget);
		var result=self.getInitialState();
		if(parseInt($span.attr("id"))<5 ){
			//self.getInitialState().first.display="block";	
			result.frist.display="block";
			result.sec.display="none";
			self.setState(result); 
		}else{
			//self.getInitialState().sec.display="block";
			result.sec.display="block";
			result.frist.display="none";
			self.setState(result); 
		}
		if(parseInt($span.attr("id"))==8){
			result.sec.data=[
				{id:'1',name:'苏州',imgUrl:'',url:''},
				{id:'2',name:'绍兴',imgUrl:'',url:''},
				{id:'3',name:'舟山',imgUrl:'',url:''},
				{id:'4',name:'杭州',imgUrl:'',url:''},
				{id:'5',name:'南京',imgUrl:'',url:''},
				{id:'6',name:'天目山',imgUrl:'',url:''},
				{id:'7',name:'滴水湖',imgUrl:'',url:''},
				{id:'8',name:'更多',imgUrl:'',url:''}
			];
		}
	},
	handleClickArea:function(e){

	},
	initCityData:function(){

	},
	getInitialState:function(type){
		// 必须返回一个对象，或者返回null
		var result={
			frist:{
				display:'none',
				data:[
					{id:'1',name:'国内',imgUrl:'',url:''},
					{id:'2',name:'韩国',imgUrl:'',url:''},
					{id:'3',name:'蒙古',imgUrl:'',url:''},
					{id:'4',name:'济州岛',imgUrl:'',url:''},
					{id:'5',name:'大阪',imgUrl:'',url:''},
					{id:'6',name:'首尔',imgUrl:'',url:''},
					{id:'7',name:'北海道',imgUrl:'',url:''},
					{id:'8',name:'更多',imgUrl:'',url:''}
				]
			},
			sec:{
				display:'none',
				data:[
					{id:'1',name:'国内',imgUrl:'',url:''},
					{id:'2',name:'韩国',imgUrl:'',url:''},
					{id:'3',name:'蒙古',imgUrl:'',url:''},
					{id:'4',name:'济州岛',imgUrl:'',url:''},
					{id:'5',name:'大阪',imgUrl:'',url:''},
					{id:'6',name:'首尔',imgUrl:'',url:''},
					{id:'7',name:'北海道',imgUrl:'',url:''},
					{id:'8',name:'更多',imgUrl:'',url:''}
				]
			}
		}; 
		return result;
	},
	render:function(){
		var self=this,
			arrayArea=self.getAreaData();

		// 当在jsx 中使用for 循环的时候要加上key 参数，因为react 在diff 算法中需要知道这个属性
		return ( <div className="entry_box bbottom dest_box_container">
                        <h2 className="tit more_hot_dest">热门区域<em className="dz_rmzt_more" style={{display:'none'}}>更多</em></h2>
                        <div className="entry_list new_entry_list">
	                       <div className="firstHotArea entry_list_cont">         
	                       		{
	                       			arrayArea.fristArr.map(function(area){
	                       				return <a key={area.id} href="javascript:void(0)" className="list_one" onClick={self.handleClick} id={area.id} title={area.name}>
												<span className="index_pic_box" >
													<img  src={area.imgUrl} />
												</span>
												<span className="ov_span">{area.name}</span>
											</a>           

	                       			})
	                       		}
								          
							
							</div>
                            <div style={{display:this.state.frist.display}} className="sub_motif_list submotifline">
                                
                                {
                                	this.state.frist.data.map(function(city){
                                		return <a  key={city.id}  href={self.props.site} onClick={self.handleClickArea}>{city.name}</a>
                                	})
                                }
                            </div>
                            <div className="secondHotArea entry_list_cont">         
								{
									arrayArea.secArr.map(function(area){
										return <a key={area.id} href="javascript:void(0)" className="list_one" onClick={self.handleClick} id={area.id} title={area.name}>
												<span className="index_pic_box" >
													<img  src={area.imgUrl} />
												</span>
												<span className="ov_span">{area.name}</span>
											</a>        
									})
								}
								       
							 
							</div>
                            <div style={{display:this.state.sec.display}} className="sub_motif_list submotifline">
                               {
                                	this.state.sec.data.map(function(city){
                                		return <a key={city.id} href={self.props.site} myname={self.props.name} onClick={self.handleClickArea}>{city.name}</a>
                                	})
                                }
                            </div>
                        </div>
                    </div>);
	}
});
export default AreaComponent;