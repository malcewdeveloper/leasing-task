export default function reducerCalculator(state, action) {
    switch(action.type) {
        case 'SET_COST':
            return {
                ...state,
                cost: action.payload.cost
            }
        case 'SET_INITIAL': 
            return {
                ...state,
                initial: action.payload.initial
            }
        case 'SET_PERIOD':
            return {
                ...state,
                period: action.payload.period
            }
        default:
            return state
    }
}