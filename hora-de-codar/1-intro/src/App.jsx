import './App.css'

import FirstComponent from './components/FirstComponent'
import MyComponent from './components/MyComponent'
import TemplateExpression from './components/TemplateExpression'
import Events from './components/Events'
import Data from './components/Data'

import city from './assets/city.jpg'

function App() {

  return (
    <div className="App" style={{ paddingBottom: '500px'}}>
      <div>
        <h2>1 - Introdução</h2>
        <h3>Hello World!!</h3>
        <hr />
      </div>

      <div>
        <h2>2 - Fundamentos</h2>
        <FirstComponent />
        <TemplateExpression />
        <MyComponent />
        <Events />
        <hr />
      </div>

      <div>
        <h2>3 - Avançando em React</h2>
        {/* 1 - imagem em public */}
        <img src="/img1.jpg" alt="Alvorada" />
        <img src={city} alt="Cidade à noite" />
        <Data />
        <hr />
      </div>
    </div>
  )
}

export default App
