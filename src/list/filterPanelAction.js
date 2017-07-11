import React ,{Component} from 'react';
import myDispatcher from '../myDispatcher';
 
var filterPanelAction={
    cancel:function(msg){
      myDispatcher.dispatch({
        actionType:'filterCancel',
        text:msg
      });
    },
    ok:function(msg){
      myDispatcher.dispatch({
        actionType:'filterOK',
        text:msg
      });
    },
    loadDestination:function(msg){
      myDispatcher.dispatch({
        actionType:'loadDestination',
        text:msg
      });
    },
};


export default filterPanelAction;