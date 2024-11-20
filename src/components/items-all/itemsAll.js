import Item from "../item/item";

export default function ItemsAll(props) {
    return (<div>
        {props.items.map(function (value, index) {
            return <Item key={index} item={value} onClick={props.onItemClick} onDelete={props.onDelete}> </Item>
        })}

    </div>);
}