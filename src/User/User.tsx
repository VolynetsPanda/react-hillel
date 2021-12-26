import * as React from "react";
import {useState} from "react";
interface typeId {
    id: number,
}
interface Props extends typeId{
    name: string,
}
interface typesTest extends Props{
    title: string,
    show: boolean | null
}
const User: React.FC<Props> = ({name}) => {
    const [test, setTest] = useState<typesTest[]>([])

    const x = () = () => {

    }
    const addTest = () =>{
        setTest([{id: 0, title: 'fre', show: true, name}])
    }

    return (
        <div>
            <h3>{name}</h3>
        </div>
    )

}
export default User;