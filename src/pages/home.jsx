import { useState } from 'react'
import '../App.css'
import Nav from '../components/Nav'
import Header from '../components/Header'
import PropertyDisplay from '../components/PropertyDisplay'
import TwoColSection from '../components/TwoColSection'
import PreviewDisplay from '../components/PreviewDisplay'
import Footer from '../components/Footer'
import propsimg2 from '/images/propimg2.jpg'


export function Home() {
    return(
        <div className='home-container'>
            <Header />
            <PropertyDisplay />
            
            <TwoColSection />
            
            <PreviewDisplay
            header = "careers"
            paragraph = "Opportunity drives us. Higher is our aim. We’re determined to live well."
            backgroundImage = {propsimg2}
            />
            <Footer />
        </div>
    )
}