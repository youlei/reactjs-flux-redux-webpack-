import React ,{Component} from 'react';
import myDispatcher from '../myDispatcher';
import $ from 'jquery'

var footerAction={
    toggleFilterPanel:function(type){
        myDispatcher.dispatch({
            actionType:'toggleFilterPanel',
            text:type
        });
    }
};
export default footerAction;