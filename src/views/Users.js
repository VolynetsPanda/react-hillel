import {Link, useRouteMatch, useHistory } from "react-router-dom";
import moment from 'moment';
import {useEffect, useState} from "react";
function Users() {
    const [list, setList] = useState([])
    const [limit, setLimit] = useState(5)
    let history = useHistory();
    const testDate = moment("10-23-1992").format("Do MMM YY");
    console.log('testDate', testDate)
    useEffect(() => {
        const paramsRequest = `?limit=${limit}`;
        history.push(paramsRequest)
        console.log('paramsRequest', paramsRequest)
        fetch(`https://fakestoreapi.com/products/${paramsRequest}`)
            .then(res => res.json())
            .then(json => setList(json))
    }, [limit])
    let { url } = useRouteMatch()
    console.log(list)
    return (
        <div className="users">
            <h1>Users {testDate}</h1>
            <ul>
                {list?.map((elem, i) => <li key={i}><Link to={`${url}/${elem.id}`}>{elem.title}</Link></li>)}

            </ul>
            <button onClick={() => setLimit(10)}>10</button>
            <button onClick={() => setLimit(20)}>20</button>
        </div>
    );
}

export default Users;