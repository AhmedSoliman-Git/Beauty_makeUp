import Product from './Product';
import './Products.css';
import { useEffect, useRef, useState } from 'react' ;
import useTransition from '../../hooks/useTransition';
import useHttp from '../../hooks/useHttp';
import SkeletonLoad from '../../UI/SkeletonLoad';
import Error from '../Error'
const configObject = {};
export default function Products() {
const secRef = useRef();
useTransition(secRef);

const {error , loading , data} = useHttp('http://localhost:3000/meals',configObject,[]);

if(error) {
    return <Error Title="can't Fetch Data ..." message={error.message} />;
}

    return <main className='container'>
        <h1>Best Sales </h1>
        <section ref={secRef} id='Shop'>
        {loading?
        data.map((item,itemIndex)=><SkeletonLoad key={itemIndex}/>): 
        data.map((item,itemIndex)=><Product key={itemIndex} item ={item}/>)
        }

        </section>

    </main>

    
}