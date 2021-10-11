export const addItemToCart = (product) => {
    return {
        type : "ADD_ITEM",
        payload : product
    }
}

export const deleteItemFromCart = (product) => {
    return {
        type : "DEL_ITEM",
        payload : product
    }
}