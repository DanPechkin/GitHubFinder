import { useState } from 'react'
import './index.css'
import Navbar from "./components/layout/Navbar.jsx";
import Footer from "./components/layout/Footer.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import NotFound from "./pages/NotFound.jsx";
import {GitHubProvider} from "./context/github/GitHubContext";
import {AlertProvider} from "./context/alert/AlertContext";
import Alert from "./components/layout/Alert.jsx";
import User from "./components/users/User.jsx";


function App() {
  const [count, setCount] = useState(0)

  return (
      <GitHubProvider>
          <AlertProvider>
    <BrowserRouter>
        <div className="flex flex-col justify-between h-screen">
            <Navbar />
            <main className="container mx-auto px-3 pb-12">
                <Alert />
                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="/about" element={<About />}/>
                    <Route path="/user/:login" element={<User />}/>
                    <Route path="/notfound" element={<NotFound />}/>
                    <Route path="/*" element={<NotFound />}/>
                </Routes>
            </main>
            <Footer />
        </div>
    </BrowserRouter>
          </AlertProvider>
      </GitHubProvider>
  )
}

export default App
