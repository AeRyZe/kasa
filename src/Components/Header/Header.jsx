import { Link } from "react-router-dom"
import Logo from '../../Assets/logo.png'
import './Header.css'

function Header() {
    return (
        <header>
            <img src={Logo} alt="Logo de Kasa" />
            <nav>
                <Link to="/">Accueil</Link>
                <Link to="/a-propos">À propos</Link>
            </nav>
        </header>
    )
}

export default Header