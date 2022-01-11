const initState = {
    isLoading: false
}
type stateType = {
    isLoading: boolean
}

type ChangeLoadingActionType = {
    type: "CHANGE-LOADING-STATUS"
    isLoading: boolean
}


export const loadingReducer = (state = initState, action: ChangeLoadingActionType): stateType => { // fix any
    switch (action.type) {
        case "CHANGE-LOADING-STATUS": {
            return {...state, isLoading: action.isLoading}
        }
        default:
            return state
    }
}

export const loadingAC = (isLoading: boolean): ChangeLoadingActionType => {
    return {
        type: "CHANGE-LOADING-STATUS",
        isLoading
    }
} // fix any