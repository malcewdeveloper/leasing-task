export const changeCost = (value) => {
    return {
        type: 'SET_COST', 
        payload: { 
            cost: value 
        }
    }
}

export const changeInitial = (value) => {
    return {
        type: 'SET_INITIAL', 
        payload: { 
            initial: value 
        }
    }
}

export const changePeriod = (value) => {
    return {
        type: 'SET_PERIOD', 
        payload: { 
            period: value 
        }
    }
}