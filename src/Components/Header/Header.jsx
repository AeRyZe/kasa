import { Link } from "react-router-dom"
import logo from '../../Assets/logo.png'
import './Header.css'

function Header() {
    return (
        <header>
            <img src={logo} alt="Logo de Kasa" className="header-logo" />
            <nav>
                <Link to="/" className="header-link">ACCUEIL</Link>
                <Link to="/a-propos" className="header-link">À PROPOS</Link>
            </nav>
        </header>
    )
}

export default Header