import React from 'react'
import whatsappicon from '../Assets/whatsapp_icon.png';
import logoplant from '../Assets/logoplant.jpg';
import instagramicon  from '../Assets/instagram_icon.png';
import '../footer/footer.css'

export default function footer() {
  return (
    <div>
        <div className='footer'>
            <div className='footer.logo'>
                <img src={logoplant} style={{display:{xs:'none' ,md:'flex'},marginRight:'8px',
                height:'40px'}}/>
                <p>Green Oasis</p>
            </div>
            <ul  className='footer-links'>
                <li>Product</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <div className='footer-social-icons'>
                <div className='footer-icons-container'>
                    <img src={instagramicon}/>
                </div>
                <div className='footer-icons-container'>
                    <img src={whatsappicon}/>
                </div>
            </div>
            <div className='footer-copyright'>
                <hr/>
                <p> Copyright @ 2024 All Right Reserved</p>
            </div>
        </div>

    </div>
  )
}
