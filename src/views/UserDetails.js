import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
function UserDetails() {
    const {userId} = useParams()
    const [data, setData] = useState({})
    useEffect(() => {
        console.log('userId', userId)
        fetch(`'https://fakestoreapi.com/products/`)
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