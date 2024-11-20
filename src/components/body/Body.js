import ItemsActive from '../items-active/itemsActive';
import ItemsAll from '../items-all/itemsAll';
import ItemsCompleted from '../items-completed/itemsCompleted';
import './Body.css';

function Body(props) {
    return (
        <div id="app-body">

            <div id="all-items" className="items-container" style ={{marginLeft: -(props.tab -1) * 100 + "%"}}>
                <div id="all-items-container">
                    <span className="no-items-message">No Items</span>
                    <ItemsAll items={props.items} onItemClick={props.onItemClick} onDelete={props.onDelete}></ItemsAll>
                </div>
            </div>

            <div id="active-items" className="items-container">
                <div id="active-items-container">
                    <span className="no-items-message">No Items</span>
                    <ItemsActive items={props.items} onItemClick={props.onItemClick} onDelete={props.onDelete}></ItemsActive>
                </div>
            </div>

            <div id="completed-items" className="items-container">
                <div id="completed-items-container">
                    <span className="no-items-message">No Items</span>
                    <ItemsCompleted items={props.items} onItemClick={props.onItemClick} onDelete={props.onDelete}></ItemsCompleted>
                </div>
            </div>

        </div>
    );
}

export default Body;
