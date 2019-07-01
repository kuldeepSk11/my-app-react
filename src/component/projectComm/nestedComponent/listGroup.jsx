import React from 'react';

const ListGroupNav = props => {
    const { items, textProperty, valuePropery, selectItems, onItemSelect } = props;
    return (  
        <React.Fragment>
            <ul className="list-group">
                {items.map(item=>
                <li onClick={()=>onItemSelect(item)} key={item[valuePropery]} className={item === selectItems ? 'list-group-item active':'list-group-item'} >{item[textProperty]}</li>
                )}
            </ul>
        </React.Fragment>
    );
}

ListGroupNav.defaultProps = {
    textProperty:"name",
    valuePropery:"_id"
}
 
export default ListGroupNav;