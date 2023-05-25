import './Collapse.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

function Collapse({ type, title, value }) {
    const [isOpen, setIsOpen] = useState(false);
    const [animationActive, setAnimationActive] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
        setAnimationActive(true);
    };

    const onAnimationEnd = () => {
        setAnimationActive(false);
    };

    return (
        <div className='collapse'>
            <div className='collapse-container' onClick={!animationActive ? toggle : null}>
                <p>{title}</p>
                <FontAwesomeIcon
                    icon={faChevronDown}
                    size='lg'
                    className={isOpen ? 'collapse-toggle-opened' : 'collapse-toggle-closed'}
                    onTransitionEnd={onAnimationEnd}
                />
            </div>
            <div className={isOpen ? 'collapse-dropdown-opened' : 'collapse-dropdown-closed'}>
                {
                    type !== 'array' ?
                        (<p>
                            {value}
                        </p>)
                    :
                        (<ul className='array-ul'>
                            {value.map((item) => (
                                <li className='array-li'>{item}</li>
                            ))}
                        </ul>)
                }
            </div>
        </div>
    )
}

export default Collapse