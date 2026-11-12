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
        <div className="min-h-screen flex items-center justify-center relative">
            <Banner />
            <div className="flex flex-col items-center justify-center gap-4">
                <p>Hello World</p>
            </div>
            <Navbar />
        </div >

    )
}

export default App
