import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar } from "@fortawesome/free-solid-svg-icons"
import './Rating.css'

function Rating({ averageRating, max }) {
    const ratingArray = Array(max).fill('');

    return (
        <div className="rating-container">
            {ratingArray.map((val, i) => (
                    <FontAwesomeIcon key={`ratingcomp-${i}`} icon={faStar} size="lg" className={i + 1 <= averageRating ? 'rating-star-full' : 'rating-star-empty'} />
                ))}
        </div>
    )
}

export default Rating