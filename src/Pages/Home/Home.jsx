import Banner from "../../Components/Banner/Banner.jsx"
import banner from '../../Assets/banner1.png'
import Thumb from "../../Components/Thumb/Thumb.jsx"

function Home() {
    return (
        <main>
            <Banner title='Chez vous, partout et ailleurs' banner={banner} />
            <Thumb />
        </main>
    )
}

export default Home