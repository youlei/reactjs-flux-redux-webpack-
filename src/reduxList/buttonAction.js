import React ,{Component} from 'react'; 
import myDispatcher from '../myDispatcher';
import $ from 'jquery'

var buttonActions={
    addNewItem:function(text){ 
        myDispatcher.dispatch({
            actionType:'ADD_NEW_ITEM',
            text:text
        });
    }
};
export default buttonActions;