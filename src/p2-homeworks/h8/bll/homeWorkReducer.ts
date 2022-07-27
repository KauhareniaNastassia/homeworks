import { UserType} from "../HW8";

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'SORT-UP': {
            let newState = [...state].sort((a,b) => {
                if(a.name > b.name) return 1
                else if (a.name < b.name) return -1
                else return 0
            })
            return newState
        }
        case 'SORT-DOWN': {
            let newState = [...state].sort((a,b) => {
                if(a.name > b.name) return 1
                else if (a.name < b.name) return -1
                else return 0
            })
            return newState.reverse()
        }
        case 'CHECK-18': {
            return state.filter (a => a.age >= action.payload)
        }
        default:
            return state
    }
}


type ActionType = sortUpUsersACType | sortDownUsersACType | checkUsersAgeACType

type sortUpUsersACType = ReturnType<typeof sortUpUsersAC>
export const sortUpUsersAC = () => {
    return {
        type: 'SORT-UP',
        payload: 'up'
    } as const
}

type sortDownUsersACType = ReturnType<typeof sortDownUsersAC>
export const sortDownUsersAC = () => {
    return {
        type: 'SORT-DOWN',
        payload: 'down'
    } as const
}

type checkUsersAgeACType = ReturnType<typeof checkUsersAgeAC>
export const checkUsersAgeAC = () => {
    return {
        type: 'CHECK-18',
        payload:
             18
    }
}
