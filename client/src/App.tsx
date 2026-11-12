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
            <Navbar />
        </div>
    )
}

export default App
