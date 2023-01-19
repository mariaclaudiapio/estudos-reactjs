import './App.css'

import MyComponent from './components/my-component/MyComponent'
import Title from './components/Title/Title';

function App() {

  const n = 8; // 4 - inline style dinâmico
  const redTitle = true; // - classes dinâmicas

  return (
    <div className="App">
      <h1>CSS no React</h1>
      <MyComponent />
      {/* 3 - inline style */}
      <p style={{ color: 'blue', padding: '25px' }}>Este elemento tem estilos inline.</p>
      <button style={{ backgroundColor: 'blue', color: 'white', padding: '25px', borderRadius: '5px' }}>Eu estou estilizado.</button>
      {/* 4 - inline style dinâmico */}
      <h2 style={n > 10 ? { color: "magenta" } : { color: "purple" }}>CSS Dinâmico</h2>
      {/* 5 - classes dinâmicas */}
      <h2 className={redTitle ? "red-title" : ""}>Este título vai ter uma classe</h2>
      {/* 6 - CSS modules */}
      <Title />
    </div>
  )
}

export default App
