import './App.css'

// 1 - configurações do React Router
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import About from './pages/About'

function App() {
  return (
    <div className="App">
      <h1>React Router</h1>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={< Home />} />
          <Route path='/about' element={< About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
