import { ArrowDown } from 'lucide-react'
import RedButton from '../../../../components/Button/RedButton'

import FeaturedProject from './FeaturedProject'

const About = () => {
    return (
        <section id="#" className="flex flex-col flex-1 justify-center items-center home-section py-4">
            <div className="home-grid gap-y-8 flex-1 w-full rounded-2xl">
                <div className="flex min-w-0 flex-col gap-4 text-left justify-center md:col-span-7">
                    <div>
                        <p className="font-semibold text-[#E8412C] italic">Hey! My name is...</p>
                        <p className="text-4xl sm:text-5xl font-bold italic">Ryan Truong</p>
                    </div>
                    <p className="max-w-prose text-base sm:text-lg">Analyzed and interpreted data to provide insights and support decision-making. Analyzed and interpreted data to provide insights and support decision-making. Analyzed and interpreted data to provide insights and support decision-making. Analyzed and interpreted data to provide insights and support decision-making. Analyzed and interpreted data to provide insights and support decision-making. Analyzed and interpreted data to provide insights and support decision-making. Analyzed and interpreted data to provide insights and support decision-making.</p>
                    <RedButton href="#questions">
                        Learn More <ArrowDown size={16} aria-hidden="true" />
                    </RedButton>
                </div>
                <div className="min-w-0 md:col-span-5 md:self-center">
                    <FeaturedProject />
                </div>
            </div>
        </section>
    );
};

export default About;
