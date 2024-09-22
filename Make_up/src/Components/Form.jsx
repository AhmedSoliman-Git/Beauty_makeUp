import { useContext ,useRef } from "react";
import CartButton from "../UI/CartButton";
import Input from "../UI/Input";
import CheckContext from '../store/CheckContext'
import CartContext from '../store/CartContext'
import useHttp from "../hooks/useHttp";
import Modal from './Modal.jsx'
import Error from './Error.jsx'

const config = {
    method : 'POST',
    headers: {
        "Content-Type" : "application/json"
    }
}

export default function Form({}){
const {data,error , loading , sendRequest} = useHttp('http://localhost:3000/orders',config);

const cartCtx = useContext(CartContext);
const checkCtx = useContext(CheckContext);

    function closeForm(){
        checkCtx.closeForm();
    }

    function handleFinish(){
        cartCtx.clear();
        checkCtx.closeLast();
}

    function PageReloader(){
        window.location.reload();
    
}

    function openLast(){
        checkCtx.openLast();
    }




    function handleSubmit(event){
        event.preventDefault();
        const formData = new FormData(event.target) ;
        const dataFd = Object.fromEntries(formData.entries())
        sendRequest(
            JSON.stringify({
                order:{
                    items:cartCtx.items ,
                    customer : dataFd
                }
            })
        )
    }




    let actions = 
    <>
        <CartButton textOnly type='button' onClick={closeForm}>Close</CartButton>
        <CartButton type='submit'>Submit Order</CartButton>
    </>


    if(loading) {
        actions = <p>...Sending Data</p> ;
    }

    if(error) {
        return <Modal open={checkCtx.progress === 'Form'} onClose={closeForm}>
        <div className='flex flex-col items-start gap-2 pl-9 pb-6'>
            <h1 className='font-light text-2xl'>Error Occured</h1>
            <p className='font-semibold text-pretty'>Please Enter Valid Data...</p>
            <div className='w-[97%] flex items-center justify-end'>
                <CartButton textOnly onClick={handleFinish}>Close</CartButton>
                <CartButton onClick={PageReloader}>Relaod</CartButton>

            </div>
        </div>
        </Modal>
    }else if(!error && data) {
        return <Modal open={checkCtx.progress === 'Form'} onClose={closeForm}>
        <div className='flex flex-col items-start gap-2 pl-9 pb-6'>
            <h1 className='font-light text-2xl'>Tahnks For Buying from us ..</h1>
            <p className='font-semibold text-pretty'>If you have any problem Please Don't Call us 😂❤ .</p>
            <div className='w-[97%] flex items-center justify-end'>
                <CartButton textOnly onClick={handleFinish}>Close</CartButton>

            </div>
        </div>
        </Modal>
    }



    
    
    return <>
    <Modal open={checkCtx.progress === 'Form'} onClose={closeForm}>
        <form className="pb-6 px-6" onSubmit={handleSubmit}>
            <div className="flex items-start flex-col">
                <Input text='Name' holder='Enter your name' type='text' name='name' id='name'/>
                <Input text='Email' holder='Enter your email' type='email' name='email' id='email' />
                <Input text='Postal code' holder='Enter your code' type='text' name='postal-code' id='postal-code'/>
                <div className="flex justify-center items-start gap-1">
                <Input text='City' holder='Enter your city' type='text'name='city' id='city'/>
                <Input text='Street' holder='Enter your Street' type='text'name='street' id='street'/>
                </div>
                </div>

            <div className="flex items-center justify-end space-x-2 space-y-2">
                {actions}
            </div>
        </form>
        </Modal>
</>
        




}