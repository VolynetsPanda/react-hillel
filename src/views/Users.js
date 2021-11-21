import {Link, useRouteMatch } from "react-router-dom";
import {useEffect, useState} from "react";
function Users() {
    const [list, setList] = useState([])
    useEffect(() => {
        fetch('https://api.punkapi.com/v2/beers')
            .then(res => res.json())
            .then(json => setList(json))
    }, [])
    let { url } = useRouteMatch()
    console.log(list)
    return (
        <div className="users">
            <h1>Users</h1>
            <ul>
                {list?.map(elem => <li><Link to={`${url}/${elem.id}`}>{elem.name}</Link></li>)}

            </ul>
        </div>
    );
}

export default Users;