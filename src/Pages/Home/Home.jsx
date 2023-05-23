import Banner from "../../Components/Banner/Banner.jsx"
import banner from '../../Assets/banner1.png'

function Home() {
    return (
        <main>
            <Banner title='Chez vous, partout et ailleurs' banner={banner} />
        </main>
    )
}

export default Home