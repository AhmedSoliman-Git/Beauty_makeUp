import { useRef } from 'react'
import banner1 from '../../assets/photos/banner-1.jpg'
import banner2 from '../../assets/photos/banner-2.jpg'
import Div from '../../UI/Div'
import './Project.css'
import useTransition from '../../hooks/useTransition'
export default function Project(){
    const secRef = useRef();
    useTransition(secRef);
    return <section className='container' ref={secRef}>
        <div className="banners">
            <Div pText='NEW COLLECTION' hText='Discover our Autumn SkinCare' BText='Explore More' image={banner1}/> 
            <Div pText='NEW COLLECTION' hText='25% Off Everything' BText='Explore More' image={banner2} extraP={true} classP ={true}/> 
        </div>
    </section>
}