import React ,{Component} from 'react';

var filterPanelView=function(props){
    return (  <div className="double_column_pop filter_pop_wrap" id="otherFilter"    style={{height:400,display:"none"}}>
                    
                    <div className="filter_result_pop">
                        <div className="mpty_filter"><span className="btn_clear" id="clearOther">清空筛选</span></div>
                        <p className="num">共14条结果</p>
                        <span className="list_btn_ok" id="otherOk">确定</span>
                        <span className="list_btn_off" id="otherCancel">取消</span>
                    </div>


                    <div className="double_column_content"   style={{height:355}}>


                        <div className="left_column">
                            <div id="otherSwitch" name="scroll" className="right_column_mc"  style={{overflow:"hidden",maxHeight:450}}>
                                <div >
                                    <ul>
                                        <li id="liTheme" data-name="出游主题" className="current">出游主题</li>
                                        <li id="liDay" data-name="游玩天数" className="">游玩天数</li>

                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="right_column" id="otherFilterDisplay"> 
                            <div id="theme" name="scroll" className="right_column_mc" style={{overflow:"hidden",maxHeight:315}}>
                                <div >
                                    <ul  className="simple_select"><li><strong>玩转暑假</strong><i className="select_input"></i></li><li><strong>美食之旅</strong><i className="select_input"></i></li><li><strong>团队建设</strong><i className="select_input"></i></li><li><strong>家庭出游</strong><i className="select_input"></i></li><li><strong>好友结伴</strong><i className="select_input"></i></li><li><strong>高端定制</strong><i className="select_input"></i></li><li><strong>摄影风光</strong><i className="select_input"></i></li><li><strong>温泉胜地</strong><i className="select_input"></i></li><li><strong>组队滑雪</strong><i className="select_input"></i></li><li><strong>秋冬赏枫</strong><i className="select_input"></i></li><li><strong>探索自然</strong><i className="select_input"></i></li><li><strong>健康养生</strong><i className="select_input"></i></li><li className="selected"><strong>亲子游</strong><i className="select_input"></i></li><li><strong>游学</strong><i className="select_input"></i></li><li><strong>明星同款</strong><i className="select_input"></i></li><li><strong>春季踏青</strong><i className="select_input"></i></li></ul>
                                </div>
                            </div>
 

                            <div id="day" name="scroll" className="right_column_mc"  style={{overflow:"hidden",maxHeight:315,display:"none"}}>
                                <div>
                                    <ul data-name="游玩天数"><li data-day="4"><strong>4天</strong><i className="select_input"></i></li><li data-day="5"><strong>5天</strong><i className="select_input"></i></li><li data-day="6"><strong>6天</strong><i className="select_input"></i></li><li data-day="7"><strong>7天</strong><i className="select_input"></i></li><li data-day="8"><strong>8天</strong><i className="select_input"></i></li><li data-day="14"><strong>14天</strong><i className="select_input"></i></li></ul>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>);

};

export default filterPanelView;