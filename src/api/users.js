import {moreUsersAction} from "../modules/users/reducer";
import API from "../constants/constants";
import axios from "axios";

// export const fetchUsers = () => {
//     return function (dispatch) {
//         fetch(API.products)
//             .then(res => res.json())
//             .then(json => {
//                 console.log(json)
//                 dispatch(moreUsersAction(json))
//             })
//     }
// }
export const fetchUsers = () => {
    return async (dispatch) => {
        const {data} = await axios.get(API.products)
        console.log(data)
        dispatch(moreUsersAction(data))
    }
}