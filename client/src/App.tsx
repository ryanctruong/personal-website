import Banner from './components/Banner/Banner.tsx'
import Navbar from './components/Navbar/Navbar.tsx'

const App = () => {

    const checkApiHealth = async () => {
        try {
            const response = await fetch("/api/health");
            if (!response.ok) {
                throw new Error(`API request failed with HTTP ${response.status}`);
            }
            const data = await response.json();
            if (data.status !== "ok") {
                throw new Error("Unexpected API health response");
            }
            alert("API is healthy.");
        } catch (error) {
            console.error("API health check failed:", error);
        }
    };


    return (
        <div className="flex min-h-screen flex-col">
            <Banner />
            <main className="flex flex-1 flex-col items-center justify-center gap-4 p-4">
                <button className="bg-[#E8412C] hover:bg-[#C0392B] text-white font-bold py-2 px-4 rounded-2xl cursor-pointer" onClick={() => checkApiHealth()}>
                    Hello World
                </button>
            </main>
            <Navbar />
        </div >

    )
}

export default App
