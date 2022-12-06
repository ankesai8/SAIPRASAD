import React from 'react'
import "./footer.css"

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title" style={{fontFamily:"changa"}}>&nbsp;<b>Anke SaiPrasad 
                {/* 👋🏻 */}
                </b></h1>

            <ul className="footer__list">
                <li>
                    <a href="#about" className="footer__link" style={{fontFamily:"changa"}}>About</a>
                </li>

                <li>
                    <a href="#portfolio" className="footer__link" style={{fontFamily:"changa"}}>Projects</a>
                </li>

                {/* <li>
                    <a href="#testimonials" className="footer__link">Testimonials</a>
                </li> */}

            </ul>

            <div className="footer__social">
                <a href='https://www.facebook.com/prasad.sai.3576?mibextid=ZbWKwL' className='footer__social-link' target="_blank">
            <i class="bx bxl-facebook"></i>
        </a>

        <a href='https://www.instagram.com/sai__eight_8/' className='footer__social-link' target="_blank">
            <i class="bx bxl-instagram"></i>
        </a>

        <a href='https://twitter.com/SAIPRASAD_264' className='footer__social-link' target="_blank">
            <i class="bx bxl-twitter"></i>
        </a>

        <a href='https://www.linkedin.com/in/anke-saiprasad/' className='footer__social-link' target="_blank">
            <i class='bx bxl-linkedin'></i>
        </a>
            </div>

            <quote className='footer__quote' style={{fontFamily:"changa"}} >“Dream, Dream Dream <br/>
                          Dreams transform into thoughts<br/>
                           And thoughts result in action.”
&nbsp;<i className="footer__title" style={{fontFamily:"changa"}}> ― <b><i>APJ ABDUL KALAM</i></b></i></quote>

            <span className='footer__copy'style={{fontFamily:"changa"}}>
               <b>Copyright &#169;2022 All rights reserved | Designed by SAIPRASAD@2022</b> 
            </span>
        </div>
    </footer>
  )
}

export default Footer