import Banner from './components/Banner/Banner.tsx'
import Navbar from './components/Navbar/Navbar.tsx'

import About from './pages/About/About.tsx'
import CareerTimeline from './pages/CareerTimeline/CareerTimeline.tsx'
import Questionnaire from './pages/Questionnaire/Questionnaire.tsx'
import Contact from './pages/Contact/Contact.tsx'

const App = () => {
    return (
        <div className="flex min-h-screen flex-col">
            <Banner />
            <main className="flex flex-1 flex-col gap-8 px-8 py-2 items-center">
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

export default App
