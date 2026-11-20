import { Link } from 'react-router'
import { ArrowDown, ArrowRight } from 'lucide-react'
import RedButton from '../../../../components/Button/RedButton'

const destinations = [
    { href: '/articles', title: 'Articles', description: 'Notes on software, data, and what I’m learning.' },
    { href: '/change-log', title: 'Change Log', description: 'See updates made on the website..' },
];

const About = () => {
    return (
        <section id="#" className="flex flex-col flex-1 justify-center items-center w-full max-w-6xl py-4 md:px-4">
            <div className="grid grid-cols-1 md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] gap-4 flex-1 w-full rounded-2xl">
                <div className="flex flex-col gap-4 text-left justify-center">
                    <div>
                        <p className="font-semibold text-[#E8412C] italic">Hey! My name is...</p>
                        <p className="text-4xl sm:text-5xl font-bold italic">Ryan Truong</p>
                    </div>
                    <p className="max-w-prose text-base sm:text-lg">Analyzed and interpreted data to provide insights and support decision-making. Analyzed and interpreted data to provide insights and support decision-making. Analyzed and interpreted data to provide insights and support decision-making. Analyzed and interpreted data to provide insights and support decision-making. Analyzed and interpreted data to provide insights and support decision-making. Analyzed and interpreted data to provide insights and support decision-making. Analyzed and interpreted data to provide insights and support decision-making.</p>
                    <RedButton href="#questions">
                        Learn More <ArrowDown size={16} aria-hidden="true" />
                    </RedButton>
                </div>
                <nav className="divide-y divide-[#9DBEB7] md:self-center">
                    {destinations.map(({ href, title, description }) => (
                        <Link
                            key={href}
                            to={href}
                            className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-2 py-4 hover:bg-[#EEF0E9] focus-visible:bg-[#EEF0E9]"
                        >
                            <div>
                                <span className="block text-xl font-bold">{title}</span>
                                <span className="block text-sm text-stone-700">{description}</span>
                            </div>
                            <ArrowRight size={18} className="text-[#E8412C]" aria-hidden="true" />
                        </Link>
                    ))}
                </nav>
            </div>
        </section>
    );
};

export default About;
