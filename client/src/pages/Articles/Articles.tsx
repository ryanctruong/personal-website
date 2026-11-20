import { Link } from 'react-router'
import beanhead from '/beanhead.png'

const Articles = () => {
    return (
        <main className="min-h-screen p-4 sm:p-8 text-center flex flex-col w-full items-center justify-center gap-12">
                <p className="text-2xl sm:text-4xl font-semibold text-[#E8412C]">PAGE UNDER CONSTRUCTION</p>
                <img className="size-24" src={beanhead} />
                <p className="text-2xl sm:text-4xl font-semibold text-[#E8412C]">COMING SOON!</p>
                <Link to="/" className="inline-flex min-h-11 items-center underline text-xl sm:text-2xl">Back to home</Link>
        </main>
    );
};

export default Articles;
