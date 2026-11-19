import { Link } from 'react-router'

const Articles = () => {
    return (
        <main className="min-h-screen p-8">
            <Link to="/" className="underline">Back to home</Link>
            <h1 className="mt-8 text-3xl font-semibold">Articles</h1>
        </main>
    );
};

export default Articles;
