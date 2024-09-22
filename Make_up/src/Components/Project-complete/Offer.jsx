import './Project.css';
import ph1 from '../../assets/photos/offer-banner-1.jpg';
import ph2 from '../../assets/photos/offer-banner-2.jpg';
import { useRef, useState } from 'react';
import useTransition from '../../hooks/useTransition';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';


export default function Offer(){
    const secRef = useRef();
    const [counter , setCounter ] = useState(false)
    useTransition(secRef);
    return <section className="container pb-28 lg:grid grid-cols-2 gap-12 font-Poppins items-center" ref={secRef} id='Offer'>
        <div className='hidden lg:flex justify-center items-center gap-8'>
            <div><img src={ph1} alt="Offer Perfum" /></div>
            <div><img src={ph2} alt="Offer Perfum" /></div>
        </div>
        
        <div>
                <div className="offer-div">
                    <p>Special offer <span>-20%</span></p>
                    <h1>Mountain Pine Bath Oil</h1>
                    <p className='offer-content'>Made using Clean , non-toxic ingredients, our products are designed for every one</p>
                    <ScrollTrigger onEnter={()=>setCounter(true)} onExit={()=>setCounter(false)}>
                    <ul className='offer-time '>
                        {counter &&<li className='mr-1 md:mr-4'><CountUp start={0} end={100} duration={5} delay={0}/></li>}
                        <span>:</span>
                        {counter &&<li className='mr-1 md:mr-4'><CountUp start={0} end={50} duration={5} delay={0}/></li>}
                        <span>:</span>
                        {counter &&<li className='mr-1 md:mr-4'><CountUp start={0} end={150} duration={5} delay={0}/></li>}
                        <span>:</span>
                        {counter &&<li className='mr-1 md:mr-4'><CountUp start={0} end={39} duration={5} delay={0}/></li>}
                        
                    </ul>
                    </ScrollTrigger>


                </div>
        </div>

    </section>
}