import Example from "./components/Example";
import {useState, useEffect} from "react";
import 'antd/dist/antd.css';
import './App.css';

function App() {
    const [countHeader, setCountHeader] = useState(0)
    const [countFooter, setCountFooter] = useState(0)
    useEffect(() => {
        setCountHeader(100)
    }, [])
    // console.log('setCountHeader => ', countHeader)
    // console.log('setCountFooter => ', countFooter)
  return (
    <div className="App">
      <Example
          text={'Hello Vasya!'}
          test={countHeader > 1}
          children={() => <p>test child</p>}
          addFooter={() => setCountHeader(countHeader+1)}
          addHeader={() => setCountFooter(countFooter+10)}
      />
    </div>
  );
}

export default App;
