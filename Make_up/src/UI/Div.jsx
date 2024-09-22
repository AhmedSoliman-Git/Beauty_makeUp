import Button from "./Button"
import styled from 'styled-components';

let H1 = styled.h1`
    width : 100% ;
    color:white ;
    font-size : 2rem ;
`
export default function Div({image,pText,hText,BText,extraP,classP}){
    return <div className='content-div'>
                <img src={image} alt="Image" />
            <div className="box-content">
                <p>{pText}</p>
                {classP ?<H1>{hText}</H1> :<h1>{hText}</h1>}
                {extraP ? <p className="txt1">MakeUp with extended range in colors for every human</p> : null}
                <Button text={BText} color="black" bg="white"/>
            </div>
</div>
}