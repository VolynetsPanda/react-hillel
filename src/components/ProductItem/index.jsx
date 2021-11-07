import React from "react";
import './style.css';

class ProductItem extends React.Component{
    render() {
        const {item, change} = this.props;
        return (
            <div>
                <h3>{item.title}</h3>
                <a href="#" onClick={() => change(item.id)}>Add</a>
            </div>
        )
    }
}

export default ProductItem;
