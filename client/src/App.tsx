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
        <div className="flex flex-col items-center justify-center gap-2 h-screen">
            <h1 className="font-semibold text-2xl text-red-500">Hello World.</h1>
            <button onClick={checkApiHealth} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Check API Health
            </button>
        </div>
    )
}

export default App
