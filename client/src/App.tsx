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
        <div className="App">
            <h1>Hello World</h1>
            <button onClick={testServer}>Test Server</button>
        </div>
    )
}

export default App
