import MyComponent from "./MyComponent"

const FirstComponent = () => {
    // inserindo comentários fora do JSX
    return (
        <div>
            {/* inserindo comentários dentro do JSX */ }
            <h1>Meu primeiro componente</h1>
            <MyComponent />
        </div>
    )
}

export default FirstComponent