// 1 - configurações do React Router
import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import Home from './pages/Home'
import About from './pages/About'
import Navbar from './components/Navbar'
import Player from './pages/Player'
import Info from './pages/Info'
import NotFound from './pages/NotFound'
import SearchForm from './components/SearchForm'
import Search from './pages/Search'

function App() {
  return (
    <div className="App">
      <h1>React Router</h1>
      <BrowserRouter>
        <Navbar />
        {/* 9 - Search Form */}
        <SearchForm />
        <Routes>
          <Route path='/' element={< Home />} />
          <Route path='/about' element={< About />} />
          <Route path='/players/:id' element={< Player />} />
          <Route path='/players/:id/info' element={<Info />} />
          <Route path='/search' element={<Search />} />
          {/* redirecionamento de rotas */}
          <Route path='/sobre' element={<Navigate to='/about' />} />
          {/* rotas não encontradas */}
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
