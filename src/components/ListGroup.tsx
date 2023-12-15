import { useState } from "react";

interface Props {
    items: string[],
    heading: string,
    onSelectItem: (item: string) => void,
}

function ListGroup({items, heading, onSelectItem}: Props) {    
    let [selectedItem, setSelectedItem] = useState(0);
 
    return (
        <>
            <h1>{ heading }</h1>
            {items.length === 0 && <p>No data found</p>}
            <ul className="list-group">
                {items.map((item, index) => <li
                    className={selectedItem === index ? "list-group-item active" : 'list-group-item'}
                    key={index} 
                    onClick={() => {
                        setSelectedItem(index);
                        onSelectItem(item);
                    }}>{item}</li>)}
             </ul>
        </>
    )
}

export default ListGroup;