import { createContext, useReducer } from "react";

const CartContext = createContext({
    items : [],
    addItemToCart : (id)=>{},
    removeItemFromCart:(item)=>{} ,
    clear :()=>{}
})

function cartReducer(state,action){
    if(action.type === 'ADDITEM') {
        let copiedCart = [...state.items];
        let findIndex = state.items.findIndex((item)=>item.id == action.item.id) ;

            if(findIndex > -1){
                let foundItem = state.items[findIndex]
                const updatedCart = {
                    ...foundItem,
                    quantity : foundItem.quantity + 1
                }
                copiedCart[findIndex] = updatedCart ;
            }
            else {
            copiedCart.push({...action.item , quantity:1})

        }
            return {...state , items : copiedCart}
}

if(action.type === 'REMOVE_ITEM') {
    let copiedCart = [...state.items];
    let findIndex = state.items.findIndex((item)=>item.id == action.id) ;
    if(copiedCart[findIndex].quantity == 1) {
        copiedCart.splice(findIndex,1);
    } else {
        const foundItem = copiedCart[findIndex] ;
        const updatedCart = {
            ...foundItem,
            quantity : foundItem.quantity -1 
        }
        copiedCart[findIndex] = updatedCart ;
    }
    return {...state , items : copiedCart} ;
}

if(action.type === 'CLEAR') {
    return { items : [] } ;
}


return state ;

}



export function ContextProvider({children}){

const [cart,dispacthFunc] = useReducer(cartReducer,{items : []})

function addItemToCart(item){
    dispacthFunc({ type : 'ADDITEM',item});
}

function removeItemFromCart(id){
    dispacthFunc({ type : 'REMOVE_ITEM',id});
}

function clear(){
    dispacthFunc({ type : 'CLEAR'});
}



    const cartctx = {
        items :cart.items ,
        addItemToCart,
        removeItemFromCart,
        clear,
    }    
    return <CartContext.Provider value={cartctx}>{children}</CartContext.Provider>
}

export default CartContext ;    