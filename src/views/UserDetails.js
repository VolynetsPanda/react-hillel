import {useParams} from "react-router-dom";
import {useMemo, useState} from "react";
function UserDetails() {
    const {userId} = useParams()
    const [data, setData] = useState({})
    useMemo(() => {
        fetch(`https://api.punkapi.com/v2/beers/${userId}`)
            .then(res => res.json())
            .then(json => setData(json[0]))
    }, [userId])
    let {name = '', image_url = '', description = ''} = data
    console.log('data', data)
    return (
        <div className="user-details">
            <h1>User {name}</h1>
            <img height={100} src={image_url} alt=""/>
            <p>{description}</p>
        </div>
    );
}

export default UserDetails;