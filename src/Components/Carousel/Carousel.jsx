import './Carousel.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

function Carousel({ Array }) {
    const [index, setIndex] = useState(0)

    const nextImg = () => {
        index === Array.length - 1 ? setIndex(0) : setIndex(index + 1)
    };
    
    const prevImg = () => {
        index === 0 ? setIndex(Array.length - 1) : setIndex(index - 1)
    };

    return (
        <div className='carousel-container'>
            <img src={Array[index]} alt="Un logement proposé sur Kasa" className='carousel-currentimg' />
            <div className='carousel-nav'>
                <FontAwesomeIcon icon={faChevronLeft} size='2xl' className='carousel-btn' onClick={prevImg} />
                <p className='carousel-index'>{`${index + 1}/${Array.length}`}</p>
                <FontAwesomeIcon icon={faChevronRight} size='2xl' className='carousel-btn' onClick={nextImg} />
            </div>
        </div>
    )
}

export default Carousel