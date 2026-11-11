const App = () => {

    const testServer = async () => {
        try {
            const response = await fetch("/api/hello");
            if (!response.ok) {
                throw new Error(`API request failed with HTTP ${response.status}`);
            }
            const data = await response.text();
            alert(`Server response: ${data}`);
        } catch (error) {
            console.error("Error fetching from server:", error);
        }
    };


    return (
        <div className="flex flex-col items-center justify-center gap-2 h-screen">
            <h1 className="font-bold text-2xl text-red-500">Hello World</h1>
            <button onClick={testServer} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Test Server
            </button>
        </div>
    )
}

export default App
