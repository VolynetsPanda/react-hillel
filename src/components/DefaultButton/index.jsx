import React, {useMemo, useState} from "react";
import './style.css';

function sum(a, b, add = true){
    if (add) {
        return a + b
    }
    return a - b
}

function DefaultButton({title, click}) {
    const [num, setNum] = useState(0)
    const sumNum = useMemo(() => sum(num, 10), [num])
    console.log('test num', num, sumNum)
    return (
       <div>
           {
               sumNum < 20 && <button onClick={() => setNum(num + 1)}>{title}</button>
           }

       </div>
    )
}
export default React.memo(DefaultButton);
