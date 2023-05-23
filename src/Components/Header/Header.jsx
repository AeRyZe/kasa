import { Link } from "react-router-dom"
import logo from '../../Assets/logo.png'
import './Header.css'

function Header() {
    return (
        <header>
            <img src={logo} alt="Logo de Kasa" className="header-logo" />
            <nav>
                <Link to="/">Accueil</Link>
                <Link to="/a-propos">À propos</Link>
            </nav>
        </header>
    )
}

export default Header