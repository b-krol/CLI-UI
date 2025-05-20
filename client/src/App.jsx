import { useState, useEffect } from 'react'
import { fetchUsers } from './services/api'
import viteLogo from '/vite.svg'
import reactLogo from './assets/react.svg'
import './App.css'
import Layout from './layout'

export default function App() {
  
  const [count, setCount] = useState(0)
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetchUsers()
      .then(data => {
        console.log('Odpowiedź z API:', data)
        // jeśli `data` to obiekt z kluczem `users`, użyj data.users
        setUsers(Array.isArray(data) ? data : data.users || [])
      })
      .catch(err => {
        console.error('Błąd pobierania użytkowników:', err)
        setUsers([]) // fallback na pustą tablicę
      })
  }, [])
  

  return (
    <>
      <Layout>
        
      </Layout>
      
      
      {/*}
      <h2 className="mt-6 mb-2">Użytkownicy:</h2>
      <ul className="list-disc list-inside">
        {Array.isArray(users) && users.length > 0 ? (
          users.map(u => <li key={u.id}>{u.name}</li>)
        ) : (
          <li>Brak użytkowników</li>
        )}
      </ul>

      <p className="mt-8 read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      */}
      
    </>
  )
}
