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
            text: '',
            pass: ''
        }
        this.changeLikes = this.changeLikes.bind(this);
        this.onMove = this.onMove.bind(this);
        this.changeText = this.changeText.bind(this);

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
    changeText(e, key){
        this.setState({
            [key]: e.target.value
        })
    }
    // changePass(e){
    //     this.setState({
    //         pass: e.target.value
    //     })
    // }
    render() {
        const {pass, text} = this.state;
        return (
            <>
                {/*<Block move={move} />*/}
                <DefaultInput
                    type={'text'}
                    change={(e) => this.changeText(e, 'text')}
                />
                <DefaultInput
                    type={'password'}
                    change={(e) => this.changeText(e, 'pass')}
                />
                <button onClick={this.onMove}>touch me!</button>
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
