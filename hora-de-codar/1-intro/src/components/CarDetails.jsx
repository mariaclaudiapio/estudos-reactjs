const CarDetails = ({brand, km, color}) => {
    return (
        <div>
            <h3>Detalhes do carro da marca {brand}:</h3>
            <ul>
                <li>Marca: {brand}</li>
                <li>Quilometragem: {km}</li>
                <li>Cor: {color}</li>
            </ul>
        </div>
    )
}

export default CarDetails