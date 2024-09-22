import Header from "./Components/Header/Header";
import Products from "./Components/Products/Products";
import Glowing from "./Components/Project-complete/Glowing";
import Offer from "./Components/Project-complete/Offer";
import Project from "./Components/Project-complete/Project";
import Carosel from "./Components/Slider/Carosel";
import Collection from "./Components/SummerCollection/Collection";
import Customer from './Components/Project-complete/Customer'
import Footer from "./Components/Project-complete/Footer";
import Loader from "./Components/Project-complete/Loader";
import { useEffect, useState } from "react";
import { ContextProvider } from "./store/CartContext";
import { ContextStarProvider } from "./store/StarContext";
import { CheckProvider } from "./store/CheckContext";
import Checkout from "./Components/Checkout";

function App() {
  const[loading , setLoading] = useState(false) ;
  useEffect(()=>{
    window.addEventListener('load',()=>{
      setLoading(true) ;
    })
    setLoading(false);


  })
  return<>
  <CheckProvider>
  <ContextStarProvider>
  <ContextProvider>
  {loading && <Loader loading={loading}/>}
  <Header />
  <Checkout />
  <Carosel />
  <Collection />
  <Products />
  <Project/>
  <Glowing/>
  <Offer/>
  <Customer />
  <Footer/>
  </ContextProvider>
  </ContextStarProvider>
  </CheckProvider>
</>
}

export default App;
