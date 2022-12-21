import { useState } from 'react'

const ListRender = () => {

    const [list] = useState(['Mateus', 'Pedro', 'Josias', 'Maria'])

    const [users, setUsers] = useState([
        {id: 1, name: 'Matheus', age: 31},
        {id: 2, name: 'Pedro', age: 28},
        {id: 3, name: 'Josias', age: 44},
        {id: 4, name: 'Maria', age: 40},
    ])

    const deleteRandom = () => {
        const randomNumber = Math.floor(Math.random() * 5)

        setUsers((prevUsers) => {
            console.log(prevUsers)
            return prevUsers.filter((user) => randomNumber !== user.id)
        })
    }

    return (
        <div>
            <ul>
                {list.map( (item, i) => (
                    <li key={i}>{item}</li>
                ) )}
            </ul>
            <ul>
                {users.map( (user) => (
                    <li key={user.id}>{user.name}, de id {user.id}, tem {user.age} anos.</li>
                ) )}
            </ul>
            <button onClick={ deleteRandom }>Delete random user</button>
        </div>
    )
}

export default ListRender