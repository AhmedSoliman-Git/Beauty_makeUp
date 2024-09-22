import { useState , useEffect } from 'react' ;

import first from '../../assets/photos/hero-banner-3.jpg';
import second from '../../assets/photos/hero-banner-2.jpg';
import third from '../../assets/photos/hero-banner-1.jpg';


import './Carosel.css'


const slider = [
  {
    img : first,
    heading : 'Reveal The ',
    ppp : 'Beauty of the skin',

    paragraph : 'Made using clean non Toxic ingredients our products are designed for every one',
    small_paragraph : 'Starting at 15.99$' ,
    btn : 'Try It Now'
    },
  {
    img : second,
    heading : 'Reveal The ',
    ppp : 'Beauty of the skin',
    paragraph : 'Made using clean non Toxic ingredients our products are designed for every one',
    small_paragraph : 'Starting at 7.99$' ,
    btn : 'Shop Now'
  },
  {
  img : third,
  heading : 'Reveal The ',
  ppp : 'Beauty of the skin',
  paragraph : 'Made using clean non Toxic ingredients our products are designed for every one',
  small_paragraph : 'Starting at 7.99$' ,
  btn : 'Shop Now'
  }
]

export default function Carosel(){
  const[slide , setSlide] = useState(0);
  const[move , setMove] = useState(true);
  let timeOut = null ;
  function previousSlide(){
    const firstSlide = slide === 0 ; 
    const IsSlider = firstSlide ? slider.length - 1 : slide -1  ;
    setSlide(IsSlider)
  }
  function nextSlide() {
    const lastSlide = slide === slider.length-1 ;
    const IsSlider = lastSlide ? 0 : slide+1 ;
    setSlide(IsSlider)
  }

  function giveMEindex(itemIndex ,event){
    setSlide(itemIndex)
  }
  useEffect(()=>{
  timeOut = move &&
      setTimeout(()=>{
      nextSlide()
    },2500);

  },[slide])






    return <>
    <div className="w-full h-[calc(100vh-16rem)] relative">
      <div className='w-full h-full flex'

    onMouseEnter={()=>{setMove(false); clearTimeout(timeOut)}}
    onMouseLeave={()=>{setMove(true) ; setTimeout(()=>{nextSlide()},2500) }}  
    >

    
        {slider.map((el,elIndex)=>{
            return <img key={elIndex} src={el.img} alt="Slider Photo" className={elIndex == slide ? 'carasol carasol_cardActive':'carasol'}/>
        })}

        <div className='w-[60%] left-16 sm:left-36 md:w-[500px] md:flex flex-col absolute top-1/2 -translate-y-1/2 md:left-48 selection:bg-emerald-700 selection:text-white '>
          <h1 className='text-3xl mb-2 font-extralight md:text-5xl md:font-light md:mb-5  '>{slider[slide].heading}</h1>
          <h1 className='text-3xl mb-4 font-extralight md:text-5xl md:font-light md:mb-5 '>{slider[slide].ppp}</h1>

          <div>
            <p className=' hidden sm:block md:font-extralight text-slate-700 mb-5 '>{slider[slide].paragraph}</p>
            <p className='font-medium mb-5 hidden sm:block'>{slider[slide].small_paragraph}</p>
            <button className='py-1.5 px-3 bg-black text-white'>{slider[slide].btn}</button>
          </div>

        </div>

        <div className='text-3xl leading-[100%] text-center hover:text-black  duration-300 font-bold text-teal-900 absolute top-1/2 left-8 -translate-x-1/2 -translate-y-1/2 px-1 cursor-pointer select-none'onClick={previousSlide}><i class="fa-solid fa-circle-chevron-left"></i></div>
        <div className='text-3xl leading-[100%] text-center hover:text-black  duration-300 font-bold text-teal-900 absolute top-1/2 right-0 -translate-x-1/2 -translate-y-1/2 px-1 cursor-pointer select-none' onClick={nextSlide}><i class="fa-solid fa-circle-chevron-right"></i></div>


          <ul className='flex justify-center items-center absolute bottom-3 left-1/2 -translate-x-1/2'>
            {slider.map((item , itemIndex)=>{
                return <li key={itemIndex} id={itemIndex} className={slide == itemIndex ? 'bottom-3 mr-5 bg-emerald-800 w-5 h-3 rounded-full cursor-pointer duration-300' :'bottom-3 mr-5 bg-slate-400 w-3 h-3 rounded-full cursor-pointer hover:bg-gray duration-300'}onClick={(event)=>giveMEindex(itemIndex,event)}></li>
              })}
          </ul>

      </div>


    </div>
    </>
}