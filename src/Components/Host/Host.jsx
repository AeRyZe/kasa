import './Host.css'

function Host({ name, pic }) {
    return (
        <div className='host-container'>
            <div className='host-name'>
                <p>{name}</p>
            </div>
            <div className='host-pic'>
                <img src={pic} alt="Icône du propriétaire." />
            </div>
        </div>
    )
}

export default Host