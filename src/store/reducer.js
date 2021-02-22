

const reducer = (state, action) => {
                
            let tempState={}
    switch (action.type) {
           
        case 'SET_INITIAL_STATE':
            console.log('setting state')
            return {
                ...action.json
            }
        case 'ADD_TO_CART':
            console.log('id', action.index, state);
             tempState = state;
            tempState.CartItems = state.CartItems + 1
            console.log('cartItem', tempState)
            console.log(tempState.products[action.index], tempState.Cart[action.index])

            if (tempState.Cart.length > 0) {
                let count = 0;
                tempState.Cart.forEach((cartItem, i) => {

                    if (cartItem.itemName == tempState.products[action.index].itemName && count == 0) {
                        tempState.Cart[i].quantity = (cartItem.quantity) + 1;
                        count++
                    }

                }

                )
                if (count == 0) {
                    tempState.Cart.push({
                        id: action.index,
                        itemName: tempState.products[action.index].itemName,
                        price: tempState.products[action.index].price,
                        description: tempState.products[action.index].description,
                        quantity: 1,
                        category: tempState.products[action.index].category
                    })
                    count++
                }
            } else {
                tempState.Cart.push({
                    id: action.index,
                    itemName: tempState.products[action.index].itemName,
                    price: tempState.products[action.index].price,
                    description: tempState.products[action.index].description,
                    quantity: 1,
                    category: tempState.products[action.index].category
                })
            }
            console.log(tempState.products[action.index].stock)
            tempState.products[action.index].stock = (state.products[action.index].stock) - 1

            console.log(tempState)
            return {
                ...tempState
            }

        case 'REMOVE_FROM_CART':
                tempState = state;
                let cartIndex;
                tempState.CartItems = state.CartItems - 1
                tempState.Cart.forEach((cartItem, i) => {
                if (cartItem.id ==action.index) {
                    cartIndex = i;
                }
                })
                if (tempState.Cart[cartIndex].quantity == 1) {
                tempState.products[action.index].stock = 20;
                tempState.Cart.splice(cartIndex, 1);
                } else {
                tempState.products[action.index].stock = state.products[action.index].stock + 1;
                tempState.Cart[cartIndex].quantity = state.Cart[cartIndex].quantity - 1
                }
              
                
                console.log(tempState)
                return{
                    ...tempState
                }


    }
    return state;
}

export default reducer