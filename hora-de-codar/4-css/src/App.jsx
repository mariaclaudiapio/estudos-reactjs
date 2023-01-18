import './App.css'

import MyComponent from './components/my-component/MyComponent'

function App() {
  return (
    <div className="App">
      <h1>CSS no React</h1>
      <MyComponent />
      {/* 3 - inline style */}
      <p style={ {color: 'blue', padding: '25px' }}>Este elemento tem estilos inline.</p>
      <button style={ {backgroundColor: 'blue', color: 'white', padding: '25px', borderRadius: '5px' }}>Eu estou estilizado.</button>
    </div>
  )
}

export default App
