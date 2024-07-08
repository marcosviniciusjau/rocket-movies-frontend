import { Container, Profile, Brand, Search } from './styles'
import { Input } from '../Input'
import photoPlaceholder from '../../assets/photo_placeholder.svg'
import { api } from '../../services/api'
import { useAuth } from '../../hooks/auth'

import { useEffect, useState } from 'react'
export function Header() {
  const [search,setSearch] = useState('')
  const { signOut, user } = useAuth()
  const photoUrl = user.photo ? `${api.defaults.baseURL}/files/${user.photo}` : photoPlaceholder

  const [movies,setMovies] = useState([])
  function handleSignOut() {
    signOut()
  }

  useEffect(() => {
    async function fetchMovies() {
      const response = await api.get(`/movies?title=${search}`)
      setMovies(response.data)
    }
    fetchMovies()
  },[search])
  return (
    <Container>
        <Brand>
        <h1>Rocketmovies</h1>
      </Brand>
      <Search>
        <Input 
          type="text" 
          value={search}
          placeholder="Pesquisar pelo título"
          onChange={e => setSearch(e.target.value)}
        />
      </Search>

      <Profile to="/profile">
        <div className="image">
          <img
            src={photoUrl}
            alt="Foto do usuário"
          />
          <div className="user">  
            <strong>{user.name}</strong>
            <span onClick={handleSignOut}>sair</span>
          </div>
        
        </div>
      </Profile>
    </Container>
  )
}