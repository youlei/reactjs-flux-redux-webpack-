import React ,{Component} from 'react';

var ButtonView =function(props){ 
    return  (<a href="javascript:void(0)" style={{display:props.state.show}} onClick={props.onClick} id="gotoDemand" className="add_helper" title="定制旅行">定制旅行</a>);
}
export default ButtonView;