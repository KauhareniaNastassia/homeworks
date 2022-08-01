export type initialStateType = {
    loading: boolean
}

const initState: initialStateType = {
    loading: false
}

export const loadingReducer = (state = initState, action: ActionsCreatorType): initialStateType => { // fix any
    switch (action.type) {
        case 'LOADING': {
            return {...state, loading: action.payload.loading}
        }
        default: return state
    }
}

type ActionsCreatorType = loadingACType

type loadingACType = ReturnType<typeof loadingAC>
export const loadingAC = (loading: boolean) => {
    return {
        type: 'LOADING',
        payload: {
            loading
        }
    }as const
} // fix any