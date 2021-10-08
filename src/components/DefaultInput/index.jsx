import React from "react";
import './style.css';

class DefaultInput extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        }
        this.onChange = this.onChange.bind(this);
    }
    onChange(e){
        this.props.change(e);
        this.setState({
            text: e.target.value
        })
    }
    render() {
        const {type, change} = this.props;
        const {text} = this.state
        return (
            <input type={type} value={text} onChange={this.onChange} />
        )
    }
}

export default DefaultInput;
