import { createContext,useState } from "react";

const CheckContext = createContext({
    progress : '',
    openForm :()=>{},
    closeForm : ()=>{},

    openCart:()=>{},
    closeCart:()=>{},

    openLast:()=>{},
    closeLast:()=>{}

})


export function CheckProvider({children}){
    const [check , setCheck ] = useState('');
    
    function openForm(){
        setCheck('Form') ;
    }

    function closeForm(){
        setCheck('')
    }



    function openCart(){
        setCheck('openCart')
    }

    function closeCart(){
        setCheck('')
    }



    function openLast(){
        setCheck('openLast')
    }

    function closeLast(){
        setCheck('')
    }

    const checkCtx = {
        progress :check,
        openForm,
        closeForm,
        openCart,
        closeCart ,
        openLast,
        closeLast
    }

    return <CheckContext.Provider value ={checkCtx}>{children}</CheckContext.Provider>

}


export default CheckContext ;