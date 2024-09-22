import { createPortal } from "react-dom"
import StarContext from "../store/StarContext"
import { useContext } from 'react'
import './Project-complete/Project.jsx';
export default function Favourites({closeFav,children}){
    const starCtx = useContext(StarContext);
    return createPortal(
    <div className="favDiv">
        {children}
    <div onClick={closeFav} className="absolute top-4 right-4 bg-red-700 text-white z-10 py-1 px-3 rounded font-semibold cursor-pointer">Close</div>
    </div>
    ,document.getElementById('favourite'))
}
