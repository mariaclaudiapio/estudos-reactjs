const TemplateExpressions = () => {

    const name = 'Maria'
    const data = {
        age: 40,
        job: 'programadora',
    }

    return (
        <div>
            <h1>Olá {name}, tudo bem?</h1>
            <p>Você atua como {data.job} e tem {20 + 20} anos.</p>
        </div>
    )
}

export default TemplateExpressions