import './Error404.css'
import { Link } from 'react-router-dom'

function Error404() {
    return (
        <main>
            <div className='error-container'>
                <div className='error-message'>
                    <h1 className='error-404'>404</h1>
                    <h2 className='error-desc'>Oups! La page que vous demandez n'existe pas.</h2>
                </div>
                <Link to="/" className='error-link'>Retour à la page d'accueil</Link>
            </div>
        </main>
    )
}

export default Error404