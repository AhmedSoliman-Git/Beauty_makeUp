import CartContext from '../../store/CartContext';
import { useContext, useRef, useState,useEffect } from 'react'
import './Products.css'
import StarContext from '../../store/StarContext';

export default function Product({item}){
    let element = <p style={{backgroundColor:'#51755e',zIndex:5}} className='absolute top-5 right-5 px-2 py-1 text-white rounded-sm'>-20 off</p>;
    const cartCtx = useContext(CartContext);
    const starCtx = useContext(StarContext);

    function handleAddItem(){
        cartCtx.addItemToCart(item);
    }


    function handleStarItem(){
        starCtx.addItemToCart(item)
    }

return <div className="product-item">
            {item.offer ? element : null}
            <img src={`http://localhost:3000/${item.image}`} alt="Product" />
            <div className='shop-fav'>
                <ul>
                    <li onClick={()=>handleStarItem(item)}><i className="fa-regular fa-star"></i></li>
                    <li onClick={()=>handleAddItem(item)}><i className="fa-solid fa-bag-shopping"></i></li>
                </ul>
            </div>
            <div className="product-item-content" id={item.id}>
                <h3>{item.name}</h3>
                <p>{item.price}$</p>
                <ul className="item-stars">
                    {item.stars.map((item ,itemIndex)=>{
                        return <li key={itemIndex}><i className="fa-solid fa-star"></i></li>
                    })}
                </ul>
            </div>  
</div>
}