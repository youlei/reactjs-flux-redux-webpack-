import React ,{Component} from 'react';
import FilterPanelController from './filterPanelController';
var footerView=function(props){
    return ( <div className="footer" >
                <ul className="search_filter_tab tab2" id="filterBottom">
                    <li id="lineplay" className={props.state.show?"new lineplay":"lineplay"  } onClick={props.myClick}>目的地</li>
                    <li id="filter" className={props.state.show?"new filter":"filter"  } onClick={props.myClick}>筛选</li>
                </ul> 
                <FilterPanelController />
               
               <div id='filterPanelOther'>
               </div>

             </div>);

};

export default footerView;