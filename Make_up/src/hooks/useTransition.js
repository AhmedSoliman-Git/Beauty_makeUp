import { useEffect } from "react";

function useTransition(mainRef){
    const refEL = mainRef;
    useEffect(()=>{
        window.addEventListener('scroll',()=>{
            const top = window.scrollY ;
            const offset = refEL.current.offsetTop ;
            const height = refEL.current.offsetHeight;
            if(top >= (offset-700) && top < offset + height) {
                refEL.current.classList.add('active')
            } else refEL.current.classList.remove('active')
    
    
        })
    },[refEL])
}

export default useTransition;