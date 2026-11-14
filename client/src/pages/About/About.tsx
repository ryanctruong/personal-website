import { ArrowRight } from 'lucide-react'

import RedButton from "../../components/Button/RedButton";

import Questionnaire from '../../components/Questionnaire/Questionnaire';

const About = () => {
    return (
        <section id="about-me" className="flex flex-col flex-1 justify-center items-center p-4 gap-8 pt-2">
            <div className="flex flex-col items-center gap-8 flex-1 w-full rounded-2xl p-4">
                <div className="flex flex-col gap-4 text-left">
                    <p className="text-5xl font-bold">Ryan Truong</p>
                    <p className="text-lg">Analyzed and interpreted data to provide insights and support decision-making. Analyzed and interpreted data to provide insights and support decision-making. Analyzed and interpreted data to provide insights and support decision-making. Analyzed and interpreted data to provide insights and support decision-making. Analyzed and interpreted data to provide insights and support decision-making. Analyzed and interpreted data to provide insights and support decision-making. Analyzed and interpreted data to provide insights and support decision-making. Analyzed and interpreted data to provide insights and support decision-making. Analyzed and interpreted data to provide insights and support decision-making. Analyzed and interpreted data to provide insights and support decision-making. Analyzed and interpreted data to provide insights and support decision-making</p>
                </div>
                <div className="flex  gap-4 justify-evenly">
                    <div className="flex gap-4 items-center justify-evenly bg-[#9DBEB7] py-2 px-4 rounded-4xl">
                        <img src="/beanhead.png" className="size-24" />
                        <div>
                            <p className="text-2xl text-white font-bold">Articles</p>
                            <p className="text-stone-700">Explore my thoughts Explore my thoughts Explore my thoughts</p>
                        </div>
                        <div className="flex items-center">
                            <RedButton title={<ArrowRight size={16} />} />
                        </div>
                    </div>
                    <div className="flex gap-4 items-center justify-evenly bg-[#9DBEB7] py-2 px-4 rounded-4xl">
                        <img src="/beanhead.png" className="size-24" />
                        <div>
                            <p className="text-2xl text-white font-bold">Linkedin</p>
                            <p className="text-stone-700">See what I post See what I post See what I post See what I post</p>
                        </div>
                        <div className="flex items-center">
                            <RedButton title={<ArrowRight size={16} />} />
                        </div>
                    </div>
                    <div className="flex gap-4 items-center justify-evenly bg-[#9DBEB7] py-2 px-4 rounded-4xl">
                        <img src="/beanhead.png" className="size-24" />
                        <div>
                            <p className="text-2xl text-white font-bold">Linkedin</p>
                            <p className="text-stone-700">See what I post See what I post See what I post See what I post</p>
                        </div>
                        <div className="flex items-center">
                            <RedButton title={<ArrowRight size={16} />} />
                        </div>
                    </div>
                </div>
            </div>
            <Questionnaire />
        </section>
    );
};

export default About;