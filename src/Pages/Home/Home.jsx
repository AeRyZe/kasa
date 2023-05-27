import Banner from "../../Components/Banner/Banner.jsx"
import banner from '../../Assets/banner1.png'
import Thumb from "../../Components/Thumb/Thumb.jsx"
import './Home.css'
import data from '../../logements.json'

function Home() {
    return (
        <main>
            <Banner title='Chez vous, partout et ailleurs' banner={banner} clazzName={'home-banner-container'} />
            <div className="thumbs-container">
                {data.map((item) => (
                    <Thumb key={`thumbcomp-${item.id}`} id={item.id} title={item.title} cover={item.cover} />
                ))}
            </div>
        </main>
    )
}

export default Home