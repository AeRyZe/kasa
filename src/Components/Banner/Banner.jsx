import './Banner.css'

function Banner({ title, banner }) {
    return (
        <div className='banner-container'>
            <img src={banner} className='banner-img' alt='Bannière à propos Kasa'></img>
            <div className='banner-overlay'>
                {title === '' ? null : (<h1 className='banner-title'>{title}</h1>)}
            </div>
        </div>
    )
}

export default Banner