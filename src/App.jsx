import Homepage from "./pages/Homepage"
import "./index.css"
import Header from "./components/Header"
import { Outlet, useLocation } from "react-router-dom"
import Footer from "./components/Footer"
import { useEffect } from "react"

function App() {
  const location = useLocation()

  useEffect (() => {
    window.scrollTo({top: 0, left: 0, behavior: 'instant'})
  }, location.pathname)

  return (
    <>
    <Header />
    <Outlet />
    <Footer />
    </>
  )
}

export default App
