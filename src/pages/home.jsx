import '../App.css'
import Header from '../components/Header'
import PropertyDisplay from '../components/PropertyDisplay'
import TwoColSection from '../components/TwoColSection'
import PreviewDisplay from '../components/PreviewDisplay'
import propsimg2 from '../assets/images/propimg2.jpg'


export function Home() {
    return(
        <div className='home-container'>
            <Header />
            <PropertyDisplay id="featured-properties" />

            <TwoColSection />

            {/* TODO(user): point VIEW OPEN POSITIONS at the external job board when available */}
            <PreviewDisplay
            header = "careers"
            paragraph = "Opportunity drives us. Higher is our aim. We’re determined to live well."
            backgroundImage = {propsimg2}
            linkText = "view open positions"
            linkTo = "/careers"
            linkText2 = "learn more"
            linkTo2 = "/careers"
            />
        </div>
    )
}