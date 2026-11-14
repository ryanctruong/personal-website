import { ArrowRight } from 'lucide-react'

import RedButton from "../../components/Button/RedButton";

import Questionnaire from '../../components/Questionnaire/Questionnaire';

const About = () => {
    return (
        <section id="#" className="flex flex-col flex-1 justify-center items-center p-4 gap-12 pt-2">
            <div className="grid grid-cols-1 md:grid-cols-2 md:grid-cols-[3fr_2fr] gap-4 flex-1 w-full rounded-2xl p-4">
                <div className="flex flex-col gap-4 text-left justify-center">
                    <div>
                        <p className="font-semibold text-[#C0392B] italic">Hey! My name is...</p>
                        <p className="text-5xl font-bold">Ryan Truong</p>
                    </div>
                    <p className="text-lg">Analyzed and interpreted data to provide insights and support decision-making. Analyzed and interpreted data to provide insights and support decision-making. Analyzed and interpreted data to provide insights and support decision-making. Analyzed and interpreted data to provide insights and support decision-making. Analyzed and interpreted data to provide insights and support decision-making. Analyzed and interpreted data to provide insights and support decision-making. Analyzed and interpreted data to provide insights and support decision-making.</p>
                </div>
                <div className="grid grid-row-1 md:grid-rows-2 gap-6 gap-4 justify-evenly">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center justify-evenly bg-[#9DBEB7] p-4 rounded-4xl">
                        <div className="flex justify-center">
                            <img src="/beanhead.png" className="size-48" />

                        </div>
                        <div className="px-2 flex flex-col gap-2">
                            <p className="text-2xl text-white font-bold">Articles</p>
                            <p className="text-stone-700">Explore my thoughts Explore my thoughts Explore my thoughts</p>
                            <div className="flex justify-end w-full">
                                <RedButton title={<ArrowRight size={16} />} />
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center justify-evenly bg-[#9DBEB7] p-4 rounded-4xl">
                        <div className="flex justify-center">
                            <img src="/beanhead.png" className="size-48" />

                        </div>
                        <div className="px-2 flex flex-col gap-2">
                            <p className="text-2xl text-white font-bold">Articles</p>
                            <p className="text-stone-700">Explore my thoughts Explore my thoughts Explore my thoughts</p>
                            <div className="flex justify-end w-full">
                                <RedButton title={<ArrowRight size={16} />} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Questionnaire />
        </section>
    );
};

export default About;