import styled from 'styled-components'
import first from '../../assets/photos/collection-1.jpg'
import second from '../../assets/photos/collection-2.jpg'
import third from '../../assets/photos/collection-3.jpg'
import './Collection.css'
import { useRef } from 'react';
import useTransition from '../../hooks/useTransition'


const Section = styled.section`
display: grid ;
grid-template-columns : repeat(auto-fill , minmax(400px,1fr)) ;
align-items:center ;
width:85% ;
gap : 1.5rem;
margin:4rem auto;
transition : all 1s ease-out ;
opacity : 0 ;
transform : translateY(10%);



@media(max-width :62rem) {
    display:grid;
    grid-template-columns : repeat(auto-fill , minmax(300px,1fr)) ;
}

@media(max-width : 48rem) {
    display:grid;
    grid-template-columns : repeat(auto-fill , minmax(300px,1fr)) ;
}

`
const Div = styled.div`
display : flex ;
flex-direction  : column ;
align-items:start ;
justify-content : start ;
position : relative ;
overflow : hidden ;
transition : all 0.3s ease-out;


&::after {
    content : '' ; 
    position : absolute ;
    width : 20% ;
    height : 160% ;
    top:-100% ;
    left:50%;
    transform : translate(-50% , -50%) rotate(45deg);
    transform-origin : center ;
    transition : all 0.3s cubic-bezier(.13,.76,.63,1.01);
    background: rgba(255, 255, 255, 0.2);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
}
&:hover::after {
    top : 180%
}

&:hover img {
    transform : scale(1.2);
}

& img {
    width:100%;
    height :100% ;
    object-fit : cover ;
    transition : all 0.2s cubic-bezier(.13,.76,.63,1.01);
}



@media(max-width : 37.5rem) {

    & img { 
        object-position : 0rem;
    }
}
& p:nth-child(3){
    position : absolute ;
    display:flex ;
    align-items: center;
    justify-content :center;
    bottom : 1rem ;
    left : 3rem ;
    font-weight : 600  ;
    text-transform : capitalize ;

    & svg {
        margin-left : 1rem ;

    }
}
`

const Parent = styled.div `
position : absolute ;
top : 10% ;
left: 3rem ;
& h3 {
    font-size : 2rem; 
    font-weight : 500 ;
    margin-bottom : 0.5rem
}

@media(max-width : 48rem) {
    & h3 {
        font-size : 1.5rem; 
        font-weight : 500 ;
        margin-bottom : 0.5rem
    }
}

& p  { 
    font-weight: 500 ;
}
`






export default function Collection(){
const secRef = useRef();
    useTransition(secRef);

    
    return <Section ref={secRef} id='Collection'>
        <Div>
            <img src={first}/>
            <Parent>
                <h3>Summer Collection</h3>
                <p> Starting at 17.99$</p>
            </Parent>
            <p><span>Shop now</span> <span><i className="fa-solid fa-arrow-right-long"></i></span></p>

        </Div>

        <Div>
            <img src={second}/>
            <Parent>
                <h3>What's New</h3>
                <p> Get the Glow</p>
            </Parent>
            <p>shop now <span><i className="fa-solid fa-arrow-right-long"></i></span></p>

        </Div>

        <Div>
            <img src={third}/>
            <Parent>
                <h3>Buy 1 Win 1</h3>
                <p> Starting at 7.99$</p>
            </Parent>
            <p>shop now <span><i className="fa-solid fa-arrow-right-long"></i></span></p>

        </Div>
    </Section>
}