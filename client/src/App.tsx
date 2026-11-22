import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router'
import Banner from './components/Banner/Banner'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'
import Articles from './pages/Articles/Articles'
import ChangeLog from './pages/ChangeLog/ChangeLog'

const App = () => {
    const { pathname, hash } = useLocation()
    const isArticles = hash === '#articles' || hash.startsWith('#articles/')

    useEffect(() => {
        if (hash && !isArticles) {
            const frame = window.requestAnimationFrame(() => {
                document.getElementById(decodeURIComponent(hash.slice(1)))?.scrollIntoView()
            })
            return () => window.cancelAnimationFrame(frame)
        }
        window.scrollTo(0, 0)
    }, [pathname, hash, isArticles])

    return (
        <div className="flex min-h-screen flex-col">
            <Banner />
            <Navbar />
            <Routes>
                <Route path="/" element={isArticles ? <Articles /> : <Home />} />
                <Route path="/articles" element={<Articles />} />
                <Route path="/change-log" element={<ChangeLog />} />
            </Routes>
        </div>
    )
}

export default App
