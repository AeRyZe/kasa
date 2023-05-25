import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar } from "@fortawesome/free-solid-svg-icons"
import './Rating.css'

function Rating({ averageRating }) {
    return (
        <div className="rating-container">
            <FontAwesomeIcon icon={faStar} size="lg" className={averageRating >= 1 ? 'rating-star-full' : 'rating-star-empty'} />
            <FontAwesomeIcon icon={faStar} size="lg" className={averageRating >= 2 ? 'rating-star-full' : 'rating-star-empty'} />
            <FontAwesomeIcon icon={faStar} size="lg" className={averageRating >= 3 ? 'rating-star-full' : 'rating-star-empty'} />
            <FontAwesomeIcon icon={faStar} size="lg" className={averageRating >= 4 ? 'rating-star-full' : 'rating-star-empty'} />
            <FontAwesomeIcon icon={faStar} size="lg" className={averageRating >= 5 ? 'rating-star-full' : 'rating-star-empty'} />
        </div>
    )
}

export default Rating