import { LampFloor, DiagramFlowHorizontal, Route, Mail } from 'lucide-react'

const Navbar = () => {
    return (
        <nav className="fixed inset-x-0 bottom-0 z-10 flex justify-center p-4 text-center">
            <div className="flex justify-center gap-8 py-2 px-8 rounded-4xl text-md bg-[#8EC5FF] text-gray-700 shadow-lg shadow-[#8EC5FF]/50">
                <div className="flex items-center gap-2 cursor-pointer">
                    <LampFloor size={20} />
                    <p>About</p>
                </div>
                <div className="flex items-center gap-2 cursor-pointer">
                    <Route size={20} />
                    <p>Timeline</p>
                </div>
                <div className="flex items-center gap-2 cursor-pointer">
                    <DiagramFlowHorizontal size={20} />
                    <p>Architecture</p>
                </div>
                <div className="flex items-center gap-2 cursor-pointer">
                    <Mail size={20} />
                    <p>Contact</p>
                </div>
            </div>
        </nav>
    );
};

export default Navbar