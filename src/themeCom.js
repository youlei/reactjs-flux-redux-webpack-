 
import React,{Component} from 'react';
import $ from 'jquery'; 
var ThemeComponent = React.createClass({

	getInitialState:function(){
		return {
			gotoHome:"on",
			gotoIndex:'',
			gotoMsg:'',
			gotoOrder:''
		};
	}, 
	handleClick:function(e){
	 
	},
	componentWillMount:function(){

	},
	render:function(){
		return (<div className="entry_box bbottom theme_box_container">
                    <div className="theme_product">
                        <h2 className="tit">热门主题<em className="dz_rmzt_more more_hot_theme">更多</em></h2>

                        <div className="theme_pic theme_pic_top theme_pic_three first_three_theme">        
						<a href="http://m.ctrip.com/webapp/dingzhi/v2_index?from=index###" name="hot_theme_area" data-span="theme">           
						<div className="pic_box">                 
						<img  alt="团队建设" src="https://pic.c-ctrip.com/VacationH5Pic/mice/dingzhi/rmzt07.jpg" data-load="1"/>         
						<div className="price_box">                
                        <p className="product_name">团队建设</p>             
						</div>                       
						</div>              
						</a>                                      
						<a href="http://m.ctrip.com/webapp/dingzhi/v2_index?from=index###" name="hot_theme_area" data-span="theme">         
						<div className="pic_box">              
						<img  alt="亲子游" src="https://images3.c-ctrip.com/dj/201703/dz/qz.jpg" data-load="1" />         
						<div className="price_box">                             
						<p className="product_name">亲子游</p>                  
						</div>                      
						</div>                   
						</a>                         
						<a href="http://m.ctrip.com/webapp/dingzhi/v2_index?from=index###" name="hot_theme_area" data-span="theme">                 
						<div className="pic_box">                      
						<img  alt="游学" src="https://images3.c-ctrip.com/dj/201703/dz/yx.jpg" data-load="1"/>        
						<div className="price_box">                 
						<p className="product_name">游学</p>            
                        </div>              
						</div>               
						</a>              
						</div> 
                        <div className="theme_pic theme_pic_three mid_three_theme">       
						<a href="http://m.ctrip.com/webapp/dingzhi/v2_index?from=index###" name="hot_theme_area" data-span="theme">    
						<div className="pic_box">                      
						<img alt="家庭出游" src="https://images3.c-ctrip.com/dj/201703/dz/cj.jpg" data-load="1"/>    
						<div className="price_box">                         
						<p className="product_name">家庭出游</p>           
						</div>                    
						</div>           
						</a>                      
						<a href="http://m.ctrip.com/webapp/dingzhi/v2_index?from=index###" name="hot_theme_area" data-span="theme">    
						<div className="pic_box">                      
						<img   alt="玩转暑假" src="https://images3.c-ctrip.com/dj/201703/dz/sq.jpg" data-load="1" />                      
						<div className="price_box">          
						<p className="product_name">玩转暑假</p>                          
						</div>                     
						</div>                   
						</a>                       
						<a href="http://m.ctrip.com/webapp/dingzhi/v2_index?from=index###" name="hot_theme_area" data-span="theme">    
						<div className="pic_box">               
						<img   alt="摄影风光" src="https://images3.c-ctrip.com/dj/201703/dz/sy.jpg" data-load="1" />         
						<div className="price_box">                     
						<p className="product_name">摄影风光</p>         
						</div>                       
						</div>                   
						</a>              
						</div> 
                        <div className="theme_pic theme_pic_three last_three_theme">       
						<a href="http://m.ctrip.com/webapp/dingzhi/v2_index?from=index###" name="hot_theme_area" data-span="theme">       
						<div className="pic_box">                 
						<img  alt="美食之旅" src="https://pic.c-ctrip.com/VacationH5Pic/mice/dingzhi/rmzt12.jpg" data-load="1"/>    
						<div className="price_box">                                
						<p className="product_name">美食之旅</p>                               
						</div>              
						</div>     
						</a>                               
						<a href="http://m.ctrip.com/webapp/dingzhi/v2_index?from=index###" name="hot_theme_area" data-span="theme">    
						<div className="pic_box">                            
						<img  alt="高端定制" src="https://pic.c-ctrip.com/VacationH5Pic/mice/dingzhi/rmzt05.jpg" data-load="1" />      
						<div className="price_box">                  
						<p className="product_name">高端定制</p>                    
						</div>                           
						</div>   
						</a>                   
						<a href="http://m.ctrip.com/webapp/dingzhi/v2_index?from=index###" name="hot_theme_area" data-span="theme">   
						<div className="pic_box">                             
						<img   alt="健康养生" src="https://images3.c-ctrip.com/dj/201703/dz/jk.jpg" data-load="1" />   
						<div className="price_box">                    
						<p className="product_name">健康养生</p>                
						</div>                      
						</div>                        
						</a>               
						</div>
                    </div>
                </div>);
	}
});
export default ThemeComponent;