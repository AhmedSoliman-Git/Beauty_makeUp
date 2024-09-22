import styled from 'styled-components'
import first from '../../assets/photos/blog-1.jpg'
import second from '../../assets/photos/blog-2.jpg'
import third from '../../assets/photos/blog-3.jpg'
import { useRef } from 'react';
import useTransition from '../../hooks/useTransition'


const Section = styled.section`
width:85% ;
margin:12rem auto;
transition : all 1s ease-out ;
opacity : 0 ;
transform : translateY(10%);




`

const MainDiv = styled.div`
display: grid ;
grid-template-columns : repeat(auto-fill , minmax(400px,1fr)) ;
align-items:center ;
gap : 1.5rem;


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
text-align:center ; 


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


`


const Content = styled.div`
width:100% ;
text-align : center ;
margin-top:1.5rem ;
font-family : 'Poppins',sans-serif ;

& h2 {
    font-size : 1.5rem ;
    font-weight : 300
}

& p {
    color : #8c8a8a;
}
`
const Divvv = styled.div`
overflow : hidden ;
width:100%;
position : relative ;

&::after {
    content : '' ; 
    position : absolute ;
    width : 20% ;
    height :180% ;
    top:-40% ;
    left:150%;
    transform : rotate(20deg);
    transform-origin : center ;
    transition : all 1s cubic-bezier(.13,.76,.63,1.01);
    background: rgba(255, 255, 255, 0.2);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
}

&:hover::after {
    left:-60%;

}



`





export default function Customer(){
const secRef = useRef();
    useTransition(secRef);
    return <Section ref={secRef} id='Blog'>
            <h1 className='text-center text-4xl font-bold tracking-tight my-24'>More To Discover</h1>    


        <MainDiv>
    
        <Div>
            <Divvv>
                <div><img src={first}/></div>
            </Divvv>

            <Content>
                <h2>From Our Blog</h2>
                <p>OUR STORE</p>
            </Content>
        </Div>

        <Div>

            <Divvv>
                <div><img src={second}/></div>
            </Divvv>

            <Content>
            <h2>From Our Blog</h2>
                <p>OUR STORE</p>
            </Content>
        </Div>

        <Div>

        <Divvv>
                <div><img src={third}/></div>
        </Divvv>




        <Content>
            <h2>From Our Blog</h2>
                <p>OUR STORE</p>
            </Content>
        </Div>
        
        </MainDiv>

    </Section>
}