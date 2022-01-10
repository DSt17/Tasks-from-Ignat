import {UserType} from "../HW8";

type actionType = {
    type: 'check' | 'sort',
    payload: 'up' | 'down' | number
}

export const homeWorkReducer = (state: Array<UserType>, action: actionType): Array<UserType> => { // need to fix any
    switch (action.type) {
        case 'sort': {
            if (action.payload === 'up') {
                return [...state].sort(function (a, b) {
                    if (a.name > b.name) return 1
                    if (a.name < b.name) return -1
                    else return 0
                })
            } else return [...state].sort(function (a, b) {
                if (a.name < b.name) return 1
                if (a.name > b.name) return -1
                else return 0
            })
        }
        case 'check': {
            return state.filter(u => u.age >= action.payload)
        }
        default:
            return state
    }
}