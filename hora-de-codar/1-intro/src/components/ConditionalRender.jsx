const ConditionalRender = () => {

    const x = false
    const name = 'Joaquina'

    return (
        // renderização condicional
        <div>
            <h3>Isso será exibido?</h3>
            {x && <p>Se x for true, sim.</p>}
            {!x && <p>Se x for falso, vai exibir essa frase.</p>}
            {/* 8 - renderização condicional com else */}
            {name === 'João' ? (
                <div>
                    <p>Olá, João! 🙋‍♀️</p>
                </div>
            ) : (
                <div>
                    <p>{name}, você não é o João! 😒</p>
                </div>
            )}
        </div>
    )
}

export default ConditionalRender