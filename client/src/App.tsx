import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router'
import Home from './pages/Home/Home'
import Articles from './pages/Articles/Articles'
import ChangeLog from './pages/ChangeLog/ChangeLog'

const App = () => {
    const { pathname, hash } = useLocation()

    useEffect(() => {
        if (hash) {
            const frame = window.requestAnimationFrame(() => {
                document.getElementById(decodeURIComponent(hash.slice(1)))?.scrollIntoView()
            })
            return () => window.cancelAnimationFrame(frame)
        }
        window.scrollTo(0, 0)
    }, [pathname, hash])

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/articles" element={<Articles />} />
            <Route path="/change-log" element={<ChangeLog />} />
        </Routes>
    )
}

export default App
