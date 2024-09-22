import CheckContext from "../store/CheckContext"
import CartContext from "../store/CartContext"
import { useContext } from "react"
import Modal from "./Modal";
import CartButton from "../UI/CartButton";
import Form from "./Form";


export default function Checkout(){

const cartCtx = useContext(CartContext);
const checkCtx = useContext(CheckContext);
const total = cartCtx.items.reduce((acc,prev)=> (acc + ((prev.quantity * prev.price))) , 0);

    function openForm(){
        checkCtx.openForm();
    }

    function closeCart(){
        checkCtx.closeCart();
    }



    return <>
    {checkCtx.progress ==='openCart' ? <Modal open={checkCtx.progress ==='openCart'} onClose={closeCart}>
    <>
                    <ul className="space-y-3">
                    {cartCtx.items.map((item , itemIndex)=>{

                            function increase(){
                                cartCtx.addItemToCart(item)
                            }
                        
                            
                            function decrease(){
                                cartCtx.removeItemFromCart(item.id)
                            }

                        return<li key={itemIndex} className='listGrid'>
                            <div className="flex items-center gap-2"> 
                                <p>{item.name}</p>
                                <p>{item.price}$</p>
                                <p>x {item.quantity}</p>
                            </div>

                            <div className='flex items-center gap-2 justify-center'>
                                <div onClick={decrease}><i className="fa-solid fa-circle-chevron-left"></i></div>
                                {item.quantity}
                                <div onClick={increase}><i className="fa-solid fa-circle-chevron-right"></i></div>
                            </div>
                            <p className="total">total : {(item.quantity * item.price).toFixed(2)}</p>
                        </li>})}
        </ul>
        <div className='py-3 px-6 text-xl'>Total : {total.toFixed(2)}</div>
        <div className="flex justify-end gap-3 mt-4 mb-3 mx-4">
            <CartButton textOnly onClick={closeCart}>Close</CartButton>
            {cartCtx.items.length > 0 && <CartButton onClick={openForm}>Check out</CartButton> }
            {console.log(checkCtx.progress)}
        </div>
        
        </> 

    </Modal> :<Form /> 

    


}
</>

}














