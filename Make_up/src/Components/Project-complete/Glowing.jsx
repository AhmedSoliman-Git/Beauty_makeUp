import { useRef } from 'react';
import GlowDiv from '../../UI/GlowDiv';
import photo1 from '../../assets/photos/feature-1.jpg'
import photo2 from '../../assets/photos/feature-2.jpg'
import photo3 from '../../assets/photos/feature-3.jpg'

import useTransition from '../../hooks/useTransition';

import './Project.css'
export default function Glowing(){
    const secRef = useRef();
    useTransition(secRef)
    return <section className='container font-Poppins capitalize' ref={secRef}>
        <h1 className='text-center text-4xl font-light tracking-tight my-24'>why Shop with glowing ?</h1>
        <div className='grid gap-8 md:grid-cols-3 text-center mt-20 mb-28'>
        <GlowDiv image={photo1} heading='Guranteed PURE' desc='All Grace formalations adhere to strict purity standars and will never contain harsh or toxic ingredients'/>
        <GlowDiv image={photo2} heading='Completely-Curelty-Free' desc='All Grace formalations adhere to strict purity standars and will never contain harsh or toxic ingredients'/>
        <GlowDiv image={photo3} heading='Ingredient Sourcing' desc='All Grace formalations adhere to strict purity standars and will never contain harsh or toxic ingredients'/>
        </div>
    </section>
}