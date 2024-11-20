import Item from "../item/item";

export default function ItemsActive(props) {
    return (<div>
        {props.items.filter(item => {
            return !item.completed
        }).map(function (value, index) {
            return <Item key={index} item={value} onClick={props.onItemClick} onDelete={props.onDelete}> </Item>
        })}
    </div>);
}