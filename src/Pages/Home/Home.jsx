import Banner from "../../Components/Banner/Banner.jsx"
import banner from '../../Assets/banner1.png'
import Thumb from "../../Components/Thumb/Thumb.jsx"
import './Home.css'
import { useEffect, useState } from "react"

function Home() {
    const [housings, setHousings] = useState([])

    useEffect(() => {
        async function getHousings() {
            const results = await fetch('http://localhost:3000/logements.json')
            const data = await results.json()
            setHousings(data)
        }
        getHousings()
    }, [])

    return (
        <main>
            <Banner title='Chez vous, partout et ailleurs' banner={banner} clazzName={'home-banner-container'} />
            <div className="thumbs-container">
                {housings.map((item) => (
                    <Thumb key={`thumbcomp-${item.id}`} id={item.id} title={item.title} cover={item.cover} />
                ))}
            </div>
        </main>
    )
}

export default Home