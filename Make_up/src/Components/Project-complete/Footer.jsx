import { useRef } from "react";
import useTransition from "../../hooks/useTransition";
import './Project.css'
import logo from'../../assets/photos/logo.png';
import check from '../../assets/photos/pay.png';
export default function Footer(){
    const secRef = useRef();
    useTransition(secRef);
    return(
    <section className="secFooter" ref={secRef}>
        <div className="footerSec">

        <div>
            <h3>Company</h3>
            <ul>
                <li>Find a location nearest you see</li>
                <li>New Product</li>
                <li>Our Store</li>
                <li>+012836675186</li>
                <li>Hello@gmail.com</li>
            </ul>
        </div>

        <div>
            <h3>Useful Links</h3>
            <ul>
                <li>New Product</li>
                <li>Best Sellers</li>
                <li>Bundle & Save</li>
                <li>Online Gift Card</li>
            </ul>
        </div>

        <div>
            <h3>Information</h3>
            <ul>
                <li>Start a return</li>
                <li>Contact us</li>
                <li>Shipping FAQ</li>
                <li>Terms & Conditions</li>
                <li>Privacy Policy</li>
            </ul>
        </div>

        <div>
            <h1>Good Emails.</h1>
            <p className="emtext">Enter Your Email Below to be the first to see new Collection and product launches</p>
            <div className="email-space">
                <div className="shinny"><input type="text" placeholder="Enter your Email"/></div>
                <button>Hello </button>
            </div>
        </div>
        </div>

    <div className="last-design">
        <div>
            <img className="logo" src={logo} alt="" />
        </div>

        <div>
            <img className="check" src={check} />
        </div>

    </div>

    <div className="content">
            <p>Created in 2024 &copy; with ❤ by <span className="hover:text-amber-400 duration-500">Ahmed Soliman</span></p>
            <ul>
                <li><a href="https://github.com/AhmedSoliman-Git"><i className="fa-brands fa-github"></i></a></li>
                <li><a href="https://www.linkedin.com/in/ahmed-soliman-a70a49245/"><i className="fa-brands fa-linkedin"></i></a></li>
            </ul>
        </div>
    </section>
    )
}