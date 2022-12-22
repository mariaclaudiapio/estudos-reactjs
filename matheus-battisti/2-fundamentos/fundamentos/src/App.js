import './App.css'
import { useState } from 'react'

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
import Fragment from './components/Fragment'
import Container from './components/Container'
import ExecuteFunction from './components/ExecuteFunction'
import Message from './components/Message'
import ChangeMessageState from './components/ChangeMessageState'



function App() {

  const name = 'Joaninha'

  const cars = [
    { id: 1, brand: 'Ferrari', color: 'Amarela', newCar: true, km: 0 },
    { id: 2, brand: 'KIA', color: 'Branco', newCar: false, km: 34343 },
    { id: 3, brand: 'Renault', color: 'Azul', newCar: false, km: 234 },
  ]  

  function showMessage() {
    console.log('Evento do componente pai.')
  }

  const [message, setMessage] = useState('')

  const handleMessage = (msg) => {
    setMessage(msg)
  }

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
      {/* reaproveitamento de componentes */}
      <CarDetails brand='Ford' color='vermelha' km={0} newCar={true} />
      <CarDetails brand='Fiat' color='branco' km={4500} newCar={false} />
      {/* loop em array de objetos */}
      {cars.map((car) => (
        <CarDetails key={car.id} brand={car.brand} color={car.color} km={car.km} newCar={car.newCar}/>
      ))}
      <Fragment />
      {/* children */}
      <Container myValue='testing'>
        <p>E este é o conteúdo.</p>
      </Container>
      {/* criando uma função */}
      <ExecuteFunction myFunction={showMessage}/>
      {/* state lift */}
      <Message msg={message}/>
      <ChangeMessageState handleMessage={handleMessage}/>
    </div>
  );
}

export default App
