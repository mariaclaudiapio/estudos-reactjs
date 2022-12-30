const TemplateExpression = () => {

    const name = 'Maria Antônia'
    const dataAtual = new Date()
    const currentYear = dataAtual.getFullYear()
    const birthYear = 1943
    const age = currentYear - birthYear

    return (
        <div>
            <p>A soma é {2 + 2}.</p>
            <p>{name}, a sua idade é {age} anos de idade.</p>
        </div>
    )
}

export default TemplateExpression