import Header from './components/Header'
import Home from './pages/Home'
import Details from './pages/Details'
import Cart from './pages/Cart'
import Register from './pages/Register'
import NotFound from './pages/NotFound'

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

function App() {
  return (
    <Router>
        <div className="min-h-screen bg-gray-50 text-gray-800">
          <Header />
          <nav className="bg-white shadow-md p-4 mb-6">
            <ul className="flex space-x-6 justify-center">
              <li><Link className="hover:text-blue-600 font-medium" to="/">Home</Link></li>
              <li><Link className="hover:text-blue-600 font-medium" to="/Cart">Carrinho</Link></li>
              <li><Link className="hover:text-blue-600 font-medium" to="/Register">Cadastro</Link></li>
            </ul>
          </nav>
          <main className="container mx-auto px-4 pb-12">
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/products/:id' element={<Details />} />
                <Route path='/Cart' element={<Cart />} />
                <Route path='/Register' element={<Register />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
          </main>
        </div>
    </Router>
  )
}

export default App
