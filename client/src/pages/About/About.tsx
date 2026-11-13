import { ArrowRight } from 'lucide-react'

import RedButton from "../../components/Button/RedButton";

import Graph from '../../components/Graph/Graph';

const About = () => {
    return (
        <div className="flex flex-col flex-1 justify-center items-center p-4 gap-8 pt-0">
            <div className="grid grid-cols-[7fr_3fr] gap-8 flex-1 w-full rounded-2xl bg-[#9CAF88] p-4">
                <div className="flex flex-col gap-4 text-white text-left">
                    <p className="text-5xl font-bold">Ryan Truong</p>
                    <p className="text-lg">Analyzed and interpreted data to provide insights and support decision-making. Analyzed and interpreted data to provide insights and support decision-making. Analyzed and interpreted data to provide insights and support decision-making. Analyzed and interpreted data to provide insights and support decision-making. Analyzed and interpreted data to provide insights and support decision-making. Analyzed and interpreted data to provide insights and support decision-making. Analyzed and interpreted data to provide insights and support decision-making. Analyzed and interpreted data to provide insights and support decision-making. Analyzed and interpreted data to provide insights and support decision-making. Analyzed and interpreted data to provide insights and support decision-making. Analyzed and interpreted data to provide insights and support decision-making</p>
                </div>
                <div className="flex flex-col gap-4 justify-evenly">
                    <div className="flex gap-4 justify-evenly bg-[#F7F5EF] p-2 rounded-4xl">
                        <img src="/beanhead.png" className="size-12" />
                        <div>
                            <p className="text-lg font-semibold">Articles</p>
                            <p className="text-stone-600">Explore my thoughts Explore my thoughts Explore my thoughts</p>
                        </div>
                        <div className="flex items-center">
                            <RedButton title={<ArrowRight size={16} />} />
                        </div>
                    </div>
                    <div className="flex gap-4 justify-evenly bg-[#F7F5EF] p-2 rounded-4xl">
                        <img src="/beanhead.png" className="size-12" />
                        <div>
                            <p className="text-lg font-semibold">Linkedin</p>
                            <p className="text-stone-600">See what I post See what I post See what I post See what I post</p>
                        </div>
                        <div className="flex items-center">
                            <RedButton title={<ArrowRight size={16} />} />
                        </div>
                    </div>
                </div>
            </div>
            <Graph />
        </div>
    );
};

export default About;