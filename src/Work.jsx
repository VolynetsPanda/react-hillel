import React from "react";
import Test from "./components/Test";
import Block from "./components/Block";
import DefaultInput from "./components/DefaultInput";

class Work extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            likes: 0,
            move: 0,
            step: 10,
            text: 'on',
            pass: '',
            color: 'black',
            products: []
        }
        this.changeLikes = this.changeLikes.bind(this);
        this.onMove = this.onMove.bind(this);
        this.changeText = this.changeText.bind(this);
        this.press = this.press.bind(this);

    }
    changeLikes(step){
        this.setState({
            likes: this.state.likes + step
        })
    }
    onMove(){
        const {move, step} = this.state
        this.setState({
            move: move + step
        })
    }
    press(){
        // this.setState({
        //     text: this.state.text === "on" ? 'off' : 'on'
        // })
        this.forceUpdate()
    }
    changeText(e, key){
        this.setState({
            [key]: e.target.value
        })
    }
    componentDidMount() {
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>{
                console.log(json)
                this.setState({
                    products: json
                })
            })
    }
    static getDerivedStateFromProps(state, props){
        console.log('getDerivedStateFromProps', state, props)
        return null
    }
    componentDidUpdate(prevProps, prevState) {
        console.log('componentDidUpdate', prevState, this.state);
        return  prevState.text !== this.state.text
        // return true
    }

    render() {
        console.log('render')
        const {pass, text, color, products} = this.state;
        return (
            <>
                {products.length ? products.map((item)=>
                    <div key={item.id}>
                        <h3>{item.title}</h3>
                        <a href="#">Add</a>
                    </div>) : <p>Loading...</p>
                }
                {/*<input type={'text'} value={text} />*/}
                {/*<Block move={move} />*/}
                {/*<DefaultInput*/}
                {/*    type={'text'}*/}
                {/*    change={(e) => this.changeText(e, 'text')}*/}
                {/*/>*/}
                {/*<DefaultInput*/}
                {/*    type={'password'}*/}
                {/*    change={(e) => this.changeText(e, 'pass')}*/}
                {/*/>*/}
                {/*<button onClick={this.press} style={{color: color}}>{text}</button>*/}
                {/*{users?.map((user) =>*/}
                {/*    <Test*/}
                {/*        user={user}*/}
                {/*    />*/}
                {/*)}*/}

            </>
        )
    }
}

export default Work;
