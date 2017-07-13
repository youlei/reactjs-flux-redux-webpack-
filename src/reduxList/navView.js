import React from 'react';

var NavView=function(props){

    return (<div className="dz_fixetop" style={{display:props.state.show}}>
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
export default NavView;