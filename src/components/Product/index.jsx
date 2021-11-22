import React, {useContext, memo} from "react";
import './style.css';
import DefaultButton from "../DefaultButton";
import Context from "../../context";
import constants from "../../helpers/constants";

function Product() {
    const {count, setCount, isLight, setIsLight} = useContext(Context)
    return (
        <div>
            <DefaultButton title="Add" click={() => setCount(count + 1)}/>
            <DefaultButton title="Remove" click={() => setCount(count - 1)}/>
            <DefaultButton
                title={`on ${!isLight ? constants.bgBody.light : constants.bgBody.dark}`}
                click={() => setIsLight(!isLight)}
            />
        </div>
    )
}
export default Product;
