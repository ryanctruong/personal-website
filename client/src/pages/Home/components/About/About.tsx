import { motion, useReducedMotion } from 'motion/react'
import { ArrowDown } from 'lucide-react'
import RedButton from '../../../../components/Button/RedButton'

import FeaturedProject from './FeaturedProject'

const About = () => {
    const reduceMotion = useReducedMotion()
    const entrance = (delay: number) => ({
        initial: reduceMotion ? false as const : { opacity: 0, y: 8 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: reduceMotion ? 0 : 0.32, delay: reduceMotion ? 0 : delay },
    })

    return (
        <section id="#" className="flex flex-col flex-1 justify-center items-center home-section py-4">
            <div className="home-grid gap-y-8 flex-1 w-full rounded-2xl">
                <div className="flex min-w-0 flex-col gap-4 text-left justify-center md:col-span-7">
                    <motion.div {...entrance(0)}>
                        <p className="font-semibold text-[#E8412C] italic">Hey! My name is...</p>
                        <p className="text-4xl sm:text-5xl font-bold italic">Ryan Truong</p>
                        <p className="mt-3 flex flex-col items-start gap-x-2 gap-y-1 text-sm leading-relaxed text-stone-600 sm:flex-row sm:flex-wrap sm:items-center">
                            <span>Open to new opportunities</span>
                            <span aria-hidden="true" className="hidden sm:inline">·</span>
                            <span>Willing to relocate</span>
                        </p>
                    </motion.div>
                    <motion.p {...entrance(0.08)} className="max-w-prose text-base sm:text-lg">I’m a Software Engineer at HCA Healthcare, where I’ve spent over three years bringing innovation and AI to HR processes. My background in Computer Science and Economics from Belmont University makes me curious about how something works and why it’s worth building. I like asking questions, working through unfamiliar problems, and building things that make someone’s day a little easier. What keeps me invested is seeing something I helped build become part of someone’s everyday routine. Outside of work, you’ll usually find me running in the wild, or on Google Maps trying to figure out where I am at!</motion.p>
                    <motion.div {...entrance(0.14)}>
                        <RedButton href="#questions">
                            Learn More <ArrowDown size={16} aria-hidden="true" />
                        </RedButton>
                    </motion.div>
                </div>
                <motion.div {...entrance(0.18)} className="min-w-0 md:col-span-5 md:self-center">
                    <FeaturedProject />
                </motion.div>
            </div>
        </section>
    );
};

export default About;
