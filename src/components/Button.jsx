import { Button } from 'antd';
import constants from "../modules/constants";

const ButtonTest = ({add}) => {
    return <Button type="primary" onClick={add}>{constants.button.title}</Button>
    // return <input
    //     type="button"
    //     value={constants.button.title}
    //     onClick={add}
    // />;
}

export default ButtonTest;