import React ,{Component} from 'react';
import FilterPanelView from './filterPanelView';
var footerView=function(props){
    return ( <div className="footer">
                <ul className="search_filter_tab tab2" id="filterBottom">
                    <li id="lineplay" className="lineplay">目的地</li>
                    <li id="filter" className="filter new">筛选</li>
                </ul> 
                <FilterPanelView />
               
               <div id='filterPanelOther'>
               </div>

             </div>);

};

export default footerView;