import React from 'react';
import { BsInstagram, BsFacebook } from 'react-icons/bs'
import './Footer.css';

function Footer() {
    return (
        <div className='footer-container'>
            <div className='footer-row-container'>
                <img src='/jones_logo_small_t.webp' height={50} alt='Jones Crest'/>
                <div style={{margin:'0 2rem'}}>
                    <h3 className='footer-h-font'>JONES COLLEGE</h3>
                    <p className='footer-p-font'>23 Sunset Blvd<br/>
                        Houston TX, 77005</p>
                </div>
                <a style={{margin:'10px'}} target="_blank" rel="noreferrer" href='https://www.instagram.com/mary_gibbs_jones_college/'>
                    <BsInstagram color='black' size={35}/> 
                </a>
                <a style={{margin:'10px'}} target="_blank" rel="noreferrer" href='https://www.facebook.com/jones.historian?fref=ts'>
                    <BsFacebook color='black' size={35}/> 
                </a>
            </div>
            <p className='footer-q-font'>
                Questions? Contact our College Coordinator Kellie Sager at ks235@rice.edu.
            </p>
            <a style={{ margin: '10px' }} href="/privacy-policy" target="_blank" rel="noopener noreferrer">Privacy Policy</a>
        </div>
    )
}

export default Footer
