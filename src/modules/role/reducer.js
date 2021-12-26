import {} from "./type";
import {role} from "../../constants/constants";
import {TEACHER, STUDENT, GUEST} from "./type.js";
const defaultState = {
    role: role.g
}

const reducerRole = (state = defaultState, action) => {
    switch (action.type){
        case TEACHER:
            return role.t
        case STUDENT:
            return role.s
        case GUEST:
            return role.g
        default:
            return state
    }
}

export const teacherAction = (payload) => ({type: TEACHER, payload})
export const studentAction = (payload) => ({type: STUDENT, payload})
export const guestAction = (payload) => ({type: GUEST, payload})

export default reducerRole;