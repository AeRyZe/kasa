import './Housing.css'
import { Navigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Carousel from '../../Components/Carousel/Carousel'
import Host from '../../Components/Host/Host'
import Tag from '../../Components/Tag/Tag'
import Rating from '../../Components/Rating/Rating'
import Collapse from '../../Components/Collapse/Collapse'

function Housing() {
    const { housingId } = useParams();
    const [housings, setHousings] = useState([])

    useEffect(() => {
        async function getHousings() {
            const results = await fetch('https://kasa-self.vercel.app/logements.json')
            const data = await results.json()
            setHousings(data)
        }
        getHousings()
    }, [])

    if (housings.length > 0) {
        const selectedHousing = housings.find(object => object.id === housingId)

        if (!selectedHousing) {
            return <Navigate to='/not-found' />
        } else {
            return (
                <main>
                    <div className='housing-container'>
                        <Carousel Array={selectedHousing.pictures} />
                        <div className='housing-infos'>
                            <div className='housing-first-layer'>
                                <h1 className='housing-title'>{selectedHousing.title}</h1>
                                <p className='housing-location'>{selectedHousing.location}</p>
                                <div className='housing-tags'>
                                    {selectedHousing.tags.map((item, index) => (
                                        <Tag key={`housetag-${selectedHousing.id}-${index}`} value={item} />
                                    ))}
                                </div>
                            </div>
                            <div className='housing-second-layer'>
                                <Host name={selectedHousing.host.name} pic={selectedHousing.host.picture} />
                                <div className='housing-rating'>
                                    <Rating averageRating={parseInt(selectedHousing.rating)} max={5} />
                                </div>
                            </div>
                        </div>
                        <div className='housing-third-layer'>
                            <div className='housing-collapse'>
                                <Collapse type='string' title='Description' value={selectedHousing.description} />
                            </div>
                            <div className='housing-collapse'>
                                <Collapse type='array' title='Équipements' value={selectedHousing.equipments} />
                            </div>
                        </div>
                    </div>
                </main>
            )
        }
    }
}

export default Housing
