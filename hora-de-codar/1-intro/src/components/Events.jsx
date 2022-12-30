const Events = () => {

    const handleClick = (e) => {
        console.log(e)
        console.log('executou')
    }

    const renderSomething = (x) => {
        if(x) {
            return <h4>Renderizando isso!</h4>
        } else {
            return <h4>Renderizando outra coisa!</h4>
        }
    }
     
    return (
        <div>
            <div>
                <button onClick={() => console.log('Testando...')}>Clique aqui</button>
            </div>
            <div>
                <button onClick={handleClick}>Clique aqui - com função</button>
            </div>
            {renderSomething(true)}
            {renderSomething(false)}
        </div>
    )
}

export default Events