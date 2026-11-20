import Banner from '../../components/Banner/Banner.tsx'
import Navbar from './components/Navbar/Navbar.tsx'

import About from './components/About/About.tsx'
import CareerTimeline from './components/CareerTimeline/CareerTimeline.tsx'
import Questionnaire from './components/Questionnaire/Questionnaire.tsx'
import Contact from './components/Contact/Contact.tsx'

const Home = () => {
    return (
        <div className="flex min-h-screen flex-col">
            <Banner />
            <main className="flex flex-1 flex-col gap-8 px-4 pt-4 pb-24 md:px-8 md:pt-8 items-center">
                <About />
                <div className="-mx-4 flex justify-center self-stretch bg-[#EEF0E9] px-4 md:-mx-8 md:px-8">
                    <Questionnaire />
                </div>
                <CareerTimeline />
                <div className="-mx-4 flex justify-center self-stretch bg-[#EEF0E9] px-4 md:-mx-8 md:px-8">
                    <Contact />
                </div>
            </main>
            <Navbar />
        </div >
    )
}

export default Home
