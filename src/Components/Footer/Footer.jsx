import './Footer.css'
import logo from '../../Assets/wlogo.png'

function Footer() {
    return (
        <footer>
            <div className='footer-container'>
                <img src={logo} alt="Logo de Kasa" />
                <p>© 2020 Kasa. All rights reserved</p>
            </div>
        </footer>
    )
}

export default Footer