import './Thumb.css'
import { Link } from 'react-router-dom'

function Thumb({ id, title, cover }) {
    return (
        <Link key={`link-${id}`} to={`/logement/${id}`} className='thumb-link'>
            <div key={`thumb-${id}`} className='thumb'>
                <img key={`img-${id}`} src={cover} alt="Couverture de logement" />
                <div key={`gradient-${id}`} className='gradient'>
                    <p key={`title-${id}`}>{title}</p>
                </div>
            </div>
        </Link>
    )
}

export default Thumb