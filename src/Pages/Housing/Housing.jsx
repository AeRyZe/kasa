import logements from '../../logements.json'
import './Housing.css'
import { Navigate, useParams } from 'react-router-dom'
import Carousel from '../../Components/Carousel/Carousel'
import Host from '../../Components/Host/Host'
import Tag from '../../Components/Tag/Tag'
import Rating from '../../Components/Rating/Rating'
import Collapse from '../../Components/Collapse/Collapse'

function Housing() {
    const { housingId } = useParams();
    const obj = logements.find(object => object.id === housingId);

    return (
        <main>
            {obj !== undefined ? (
                <div className='housing-container'>
                    <Carousel Array={obj.pictures} />
                    <div className='housing-first-layer'>
                        <h1 className='housing-title'>{obj.title}</h1>
                        <Host name={obj.host.name} pic={obj.host.picture} />
                    </div>
                    <p className='housing-location'>{obj.location}</p>
                    <div className='housing-second-layer'>
                        <div className='housing-tags'>
                            {obj.tags.map((item, index) => (
                                <Tag key={`housetag-${obj.id}-${index}`} value={item} />
                            ))}
                        </div>
                        <div className='housing-rating'>
                            <Rating averageRating={parseInt(obj.rating)} />
                        </div>
                    </div>
                    <div className='housing-third-layer'>
                        <div className='housing-collapse'>
                            <Collapse type='string' title='Description' value={obj.description} />
                        </div>
                        <div className='housing-collapse'>
                            <Collapse type='array' title='Équipements' value={obj.equipments} />
                        </div>
                    </div>
                </div>
            ) : (
                <Navigate to='/not-found' />
            )}
        </main>
    )
}

export default Housing