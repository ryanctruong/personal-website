import Banner from '../../components/Banner/Banner.tsx'
import Navbar from '../../components/Navbar/Navbar.tsx'

import About from '../About/About.tsx'
import CareerTimeline from '../CareerTimeline/CareerTimeline.tsx'
import Questionnaire from '../Questionnaire/Questionnaire.tsx'
import Contact from '../Contact/Contact.tsx'

const Home = () => {
    return (
        <div className="flex min-h-screen flex-col">
            <Banner />
            <main className="flex flex-1 flex-col gap-8 p-8 items-center">
                <About />
                <div className="-mx-8 flex justify-center self-stretch bg-[#EEF0E9] px-8">
                    <Questionnaire />
                </div>
                <CareerTimeline />
                <div className="-mx-8 flex justify-center self-stretch bg-[#EEF0E9] px-8">
                    <Contact />
                </div>
            </main>
            <Navbar />
        </div >
    )
}

export default Home
