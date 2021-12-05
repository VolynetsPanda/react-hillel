import {ADD_USER, REMOVE_USER, MORE_USERS} from "./type";
const defaultState = {
    users: []
}

const reducerUsers = (state = defaultState, action) => {
    switch (action.type){
        case MORE_USERS:
            return {...state, users: [...state.users, ...action.payload]}
        case ADD_USER:
            return {...state, users: [...state.users, action.payload]}
        case REMOVE_USER:
            return {...state, users: state.users.filter(el => el.id !== action.payload)}
        default:
            return state
    }
}

export const moreUsersAction = (payload) => ({type: MORE_USERS, payload})

export default reducerUsers;