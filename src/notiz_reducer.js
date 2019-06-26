

export const addItem = (value) => {
    return {
        type: "ADD_ITEM",
        payload: {
            value: value
        }
    }
}


export const removeItem = (id) => {
    return {
        type: "REMOVE_ITEM",
        payload: {
            id: id
        }
    }
}

export const initialState = {
    items: [],
    idCounter: 0
}


export const reducer = (state, action) => {
    switch(action.type) {
        case "ADD_ITEM": {

            const newValue = action.payload.value

            const newId = state.idCounter + 1;

            const newItem = {
                id: newId,
                value: newValue
            }

            return {
                ...state,
                items: [...state.items, newItem],
                idCounter: newId
            }
        }

        case "REMOVE_ITEM": {
            const idToRemove = action.payload.id

            const newItems = state.items.filter(item => item.id !== idToRemove)

            return {
                ...state,
                items: newItems
            }
        }

        default: return state
    }
}
