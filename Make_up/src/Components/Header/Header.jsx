import { useContext,useState } from 'react' ;
import logo from '../../assets/photos/logo.png' 
import classes from './Header.module.css'
import CartContext from '../../store/CartContext';
import CheckContext from '../../store/CheckContext';
import '../Project-complete/Project.css'
import StarContext from '../../store/StarContext';
import Favourites from '../Favourites';

export default function Header(){
    const[starOpen , setStarOpen] = useState(false);
    const [display , setDisplay] = useState(false);
    const cartCtx = useContext(CartContext);
    const starCtx = useContext(StarContext);
    const checkCtx = useContext(CheckContext);

    const quantity = cartCtx.items.length ;
    const StarQuantity = starCtx.items.length ;
    const total = cartCtx.items.reduce((acc,prev)=> (acc + ((prev.quantity * prev.price))) , 0);

    function openFavourites(){
        setStarOpen(prev=>!prev)
    }

    function deleteFav(){
        starCtx.removeItemFromCart()
    }

    function openCart(){
        checkCtx.openCart();
    }

    function openSide(){
        setDisplay(prev=>!prev)
    }





    if(starOpen && starCtx.items.length == 0){
        return <Favourites closeFav = {openFavourites}>
            <div className=' text-3xl font-Poppins font-semibold tracking-widest absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 '><h1>No Favourites yet🛒...</h1></div>
        </Favourites>
    } else if(starOpen) {
        return <Favourites closeFav = {openFavourites}>
                        {starCtx.items.map((item , itemIndex)=>{

                            function deleteFav(){
                                starCtx.removeItemFromCart(item.id)
                        }
                    
                return <div key={itemIndex} className="star-container relative">
                    <div className="relative">
                    <div onClick={deleteFav} className="absolute z-10 top-6 right-6 font-bold p-3 bg-emerald-700 rounded-full text-white hover:bg-black duration-300 cursor-pointer">X</div>
                    <img src={`http://localhost:3000/${item.image}`} alt="fav" />
                    </div>

                    <div className="StarContent">
                        <p>{item.name}</p>
                    </div>
                </div>
            })}
        </Favourites>
    }



    return <>
    <header>
        <div className={classes.someText}>
            <h3>free shipping on all u.s Orders $50+</h3>
        </div>

        <nav className={classes.container}>
            <div className={classes.search}>
                <input type="text" placeholder='Search Product'/>
                <i className="fa-solid fa-magnifying-glass"></i>
            </div>

            <div className={classes.imageContainer}>
                <img src={logo} alt="logo" />
            </div>

            <div className={classes.icons}>
                <ul>
                    <p>
                    <li className='cursor-pointer' onClick={openFavourites}><i className="fa-regular fa-star"></i></li>
                    <span>{StarQuantity}</span>
                    </p>

                    <li>{total.toFixed(2)}$</li>

                    <p>
                    <li  className='cursor-pointer' onClick={openCart}><i className="fa-solid fa-bag-shopping"></i></li>
                    <span>{quantity}</span>
                    </p>
                    
                    <li onClick={openSide}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </li>
                </ul>

            </div>

        </nav>

        <div className={display ? classes.display : classes.sideNav}>
            <ul>
                <li><a href="#Home">Home</a></li>
                <li><a href="#Collection">Collection</a></li>
                <li><a href="#Blog">Blog</a></li>
                <li><a href="#Shop">Shop</a></li>
                <li><a href="#Offer">Offer</a></li>
                <li><a href="#" onClick={()=>checkCtx.openCart()}><i className="fa-solid fa-bag-shopping"></i>Shopping list : <span>{cartCtx.items.length}</span></a> </li>
                <li><a href="#" onClick={()=>openFavourites()}><i class="fa-regular fa-star"></i>Favourites : <span>{starCtx.items.length}</span></a></li>
            </ul>
            <p>
                <span className={classes.spanIcon} onClick={openSide}><i class="fa-solid fa-x"></i></span>
            </p>
        </div>

        <div className={classes.links}>
            <ul>
                <li><a href="#Home">Home</a></li>
                <li><a href="#Collection">Collection</a></li>
                <li><a href="#Blog">Blog</a></li>
                <li><a href="#Shop">Shop</a></li>
                <li><a href="#Offer">Offer</a></li>
            </ul>
        </div>
    </header> 
    </>
}


