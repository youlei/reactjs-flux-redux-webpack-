 
import React,{Component} from 'react';
import $ from 'jquery'; 
var AdvisorComponent = React.createClass({

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
		return (<div className="entry_box ace_custom designer_box_container bbottom">
                    <h2 className="tit">推荐定制师<em className="dz_rmzt_more more_designer">更多</em></h2>
                    <ul className="ace_customlist">                          
					<li className="see_single_tailor" data-index="0" data-advisorid="3485">          
					<div className="bg">                          
					<span className="peo_img man">              
						<img   src="https://dimg04.c-ctrip.com/images/Z80a060000001hdal4460_C_120_120.jpg" data-load="1"/>       
					</span>            
					<p className="name">定制师飞哥</p>           
					<p className="peo_num">服务1140人</p>           
					</div>                 
					</li>                               
					<li className="see_single_tailor" data-index="1" data-advisorid="44412">            
                    <div className="bg">               
					<span className="peo_img woman">                     
						<img   src="https://dimg04.c-ctrip.com/images/300u0d0000006uap6608C_C_120_120.jpg" data-load="1"/>          
					</span>                              
					<p className="name">我叫婧jing</p>            
					<p className="peo_num">服务1022人</p>                
					</div>                   
					</li>                                  
					<li className="see_single_tailor" data-index="2" data-advisorid="1829">      
					<div className="bg">                      
					<span className="peo_img woman">                          
						<img  src="https://dimg04.c-ctrip.com/images/300v0b00000057tlh0C62_C_120_120.jpg" data-load="1"/>       
					</span>                          
					<p className="name">啊梅</p>                        
					<p className="peo_num">服务1922人</p>               
					</div>                      
					</li>    
					</ul>
                </div>);
	}
});
export default AdvisorComponent;