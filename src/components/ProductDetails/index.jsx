import React from "react";
import './style.css';

class ProductDetails extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            product: {}
        }
    }
    componentDidMount() {
        fetch(`https://fakestoreapi.com/products/${this.props.idProduct}`)
            .then(res=>res.json())
            .then(json=>{
                this.setState({
                    product: json
                })
            })
    }
    render() {
        const {idProduct} = this.props;
        const {product} = this.state;
        return idProduct && (
            <>
                <h3>{product.title}</h3>
                <img height={150} src={`${product.image}`} alt=""/>
                <a href="#" onClick={() => {}}>Buy</a>
            </>
        )
    }
}

export default ProductDetails;
