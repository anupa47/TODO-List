const defaultState = {
    number: 4,
    alexa: 'nimal'
}

const numberActionTypes = {
    INC: 'increment',
    DEC: 'deccrement',
    ALEX: 'changee'
}

export const numberIncrement = (payload = 1) => {
    return {
        type: numberActionTypes.INC,
        payload
    }
}

export const numberDecrement = (payload = 6) => ({
    type: numberActionTypes.DEC,
    payload
})

export const nameChange = (payload = 'anupa') => ({
    type: numberActionTypes.ALEX,
    payload
})

const reducer = (state = defaultState, { type, payload }) => {
    if (type === numberActionTypes.INC) {
        return {
            ...defaultState,
            number: state.number + payload
        }
    }
    if (type === numberActionTypes.DEC) {
        return {
            ...defaultState,
            number: state.number - payload
        }
    }
    if (type === numberActionTypes.ALEX) {
        return {
            ...defaultState,
            alexa: 'annn'
        }
    }
  
  
    return state
}

export default reducer