import { useState } from 'react'

import './App.css'

import city from './assets/city.jpg'

import FirstComponent from './components/FirstComponent'
import MyComponent from './components/MyComponent'
import TemplateExpression from './components/TemplateExpression'
import Events from './components/Events'
import Data from './components/Data'
import ListRender from './components/ListRender'
import ConditionalRender from './components/ConditionalRender'
import ShowUserName from './components/ShowUserName'
import CarDetails from './components/CarDetails'
import Fragment from './components/Fragments'
import Container from './components/Container'
import ExecuteFunction from './components/ExecuteFunction'
import Message from './components/Message'
import ChangeMessage from './components/ChangeMessage'

// renderização de listas com componentes
const cars = [
  { id: 1, brand: 'Ferrari', color: 'Amarelo', km: 0 },
  { id: 2, brand: 'KIA', color: 'Branco', km: 230000 },
  { id: 3, brand: 'Renault', color: 'Azul', km: 32000 },
]

function App() {

  // 14 - função em prop
  function showMessage() {
    console.log('Evento do componente pai.')
  }

  //15 - state lift
  const [message, setMessage] = useState('')

  const handleMessage = (msg) => {
    setMessage(msg)
  }

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
        <ListRender />
        {/* renderização condicional */}
        <ConditionalRender />
        {/* 8 - props */}
        <ShowUserName name='Jennifer' />
        {/* 9 - desestruturando props */}
        <CarDetails brand='VW' km={999} color='vermelho' />
        {/* 10 - reaproveitamento de componentes */}
        <CarDetails brand='Fiat' km={123444} color='Branco' />
        <CarDetails brand='Audi' km={9847} color='Azul' />
        {/* 11 - renderização de listas com componentes */}
        {cars.map((car) => (
          <CarDetails key={car.id} 
          brand={car.brand}
          color={car.color}
          km={car.km} />
        ))}
        <Fragment />
        <Container>
          <button>Testando meu componente</button>
        </Container>
        <ExecuteFunction myFunction={showMessage}/>
        <Message msg={message} />
        <ChangeMessage handleMessage={handleMessage} />
        <hr />
      </div>
    </div>
  )
}

export default App
