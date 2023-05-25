import Banner from '../../Components/Banner/Banner.jsx'
import banner from '../../Assets/banner2.png'
import './About.css'
import Collapse from '../../Components/Collapse/Collapse.jsx'

function About() {
    return (
        <main>
            <Banner title='' banner={banner} />
            <Collapse type='string' title='Fiabilité' value='Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.' />
            <Collapse type='string' title='Respect' value='La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.' />
            <Collapse type='string' title='Service' value='Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N&apos;hésitez pas à nous contacter si vous avez la moindre question.' />
            <Collapse type='string' title='Sécurité' value='La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l&apos;hôte qu&apos;au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.' />
        </main>
    )
}

export default About