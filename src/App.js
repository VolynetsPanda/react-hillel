import {useEffect, useState} from "react";
import Context from "./context";
import './App.css';
import Header from "./components/Header";
import Product from "./components/Product";

function App() {
    const [count, setCount] = useState(0)
    const [isLight, setIsLight] = useState(true)
    // useEffect(() => {
    //     const name = prompt('youre name', 'vasya')
    //     const data = [{name: 'test', id: 4, isChecked: false}]
    //     const isName = typeof localStorage.getItem(name) === 'string'
    //     console.log(isName)
    //     isName && localStorage.setItem(name, JSON.stringify(data))
    //
    // }, [])
      return (
          <Context.Provider value={{count, setCount, isLight, setIsLight}}>
            <div className="App" style={{background: !isLight ? 'white' : 'black'}}>
              <Header />
              <Product />
            </div>
          </Context.Provider>
  );
}

export default App;
