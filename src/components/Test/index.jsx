import React from "react";
import './style.css';
import logo from '../../assets/1.jpeg'

class Test extends React.Component{
    render() {
        const { user } = this.props
        const {name, age} = user
        return (
            <div className='test'>
                <h1 className='test-title'>{name}</h1>
                {age && <p>{age}</p>}
                <img src={logo} alt=""/>
            </div>
        )
    }
}

export default Test;
