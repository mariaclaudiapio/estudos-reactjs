import './App.css'

// import FirstComponent from './components/FirstComponent'
// import MyComponent from './components/MyComponent'
// import TemplateExpressions from './components/TemplateExpressions'
// import Events from './components/Events'
import City from './assets/city.jpg'
import CarDetails from './components/CarDetails'
import ConditionalRender from './components/ConditionalRender'
import ListRender from './components/ListRender'
import ManageData from './components/ManageData'
import ShowUserName from './components/ShowUserName'


function App() {

  const name = 'Joaninha'

  return (
    <div className="App">
      <h1>Fundamentos React</h1>
      {/* <FirstComponent />
      <TemplateExpressions />
      <MyComponent />
      <Events /> */}

      {/* imagem em public */}
      <div>
        <img src="/img1.jpg" alt="Paisagem" />
      </div>

      {/* imagem em src */}
      <div>
        {<img src={ City } alt="Cidade" />}
      </div>
      <ManageData />
      <ListRender />
      <ConditionalRender />
      {/* props */}
      <ShowUserName name={name} />
      {/* destructuring */}
      <CarDetails brand='VW' km={100000} color='Azul'/>
    </div>
  );
}

export default App
