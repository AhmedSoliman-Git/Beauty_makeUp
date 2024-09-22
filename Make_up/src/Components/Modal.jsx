import { useEffect,useRef,useContext } from "react"
import CartContext from "../store/CartContext"
import { createPortal } from "react-dom";
import CheckContext from "../store/CheckContext";
export default function Modal({open,children,onClose}){
    const dialog = useRef() ;
    const checkCtx = useContext(CheckContext);

        useEffect(()=>{
            const modal = dialog.current ;
            if(open){
                modal.showModal() 
            } 

            if(checkCtx.progress === '') {
                modal.close();
            }




        },[open])


    return createPortal(
        <dialog className="pt-6" ref={dialog} onClose={onClose}>{children}</dialog>
        ,document.getElementById('modal'))  
    }





