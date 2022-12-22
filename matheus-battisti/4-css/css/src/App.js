import './App.css'

import MyComponent from './components/MyComponent'
import Title from './components/Title';

function App() {

  const n = 15
  const redTitle = false

  return (
    <div className="App">
      {/* CSS global */}
      <h1>React com CSS</h1>
      {/* CSS de componente */}
      <MyComponent />
      <p>Este parágrafo é do MyComponent.js</p>
      <p style={{ color: 'blue', padding: '25px', border: '2px solid red', backgroundColor: 'white' }}>
        Este elemento foi estilizado de forma inline.
      </p>
      {/* CSS inline dinâmico */}
      <h2 style={n < 10 ? ({color: 'purple'}) : ({color: 'pink'})}>CSS dinâmico</h2>
      {/* classe dinâmica */}
      <h2 className={ redTitle ? 'red-title' : 'title' }>Este título vai ter uma classe dinâmica.</h2>
      {/* CSS Modules */}
      <Title />
      <h2 className='my_title'>Outro parágrafo para teste</h2>
    </div>
  );
}

export default App;
