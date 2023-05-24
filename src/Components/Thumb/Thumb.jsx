import data from '../../logements.json'
import './Thumb.css'
import { Link } from 'react-router-dom'

function Thumb() {
    return (
        <div className='thumbs-container'>
            {data.map((item) => (
                <Link key={`link-${item.id}`} to={`/logement/${item.id}`}>
                    <div key={`thumb-${item.id}`} className='thumb'>
                        <img key={`img-${item.id}`} src={item.cover} alt="Couverture de logement" />
                        <div key={`gradient-${item.id}`} className='gradient'>
                            <p key={`title-${item.id}`}>{item.title}</p>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    )
}

export default Thumb