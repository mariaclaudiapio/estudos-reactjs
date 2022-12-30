import './App.css'

import FirstComponent from './components/FirstComponent'
import MyComponent from './components/MyComponent'
import TemplateExpression from './components/TemplateExpression'
import Events from './components/Events'

function App() {

  return (
    <div className="App">
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
    </div>
  )
}

export default App
