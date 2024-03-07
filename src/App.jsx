import Homepage from "./pages/Homepage"
import "./index.css"
import Header from "./components/Header"
import { Outlet } from "react-router-dom"
import Footer from "./components/Footer"

function App() {
  return (
    <>
    <Header />
    <Outlet />
    <Footer />
    </>
  )
}

export default App
