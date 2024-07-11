import { Container, Profile, Brand, Search, AppearSearch } from './styles'
import { Input } from '../Input'
import photoPlaceholder from '../../assets/photo_placeholder.svg'
import { api } from '../../services/api'
import { useAuth } from '../../hooks/auth'
import { Results } from '../Results'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export function Header() {
  const [visible,setVisible] = useState(false)
  const [search,setSearch] = useState('')
  const { signOut, user } = useAuth()
  const photoUrl = user.photo ? `${api.defaults.baseURL}/files/${user.photo}` : photoPlaceholder

  const [movies,setMovies] = useState([]) 
  const navigation = useNavigate()
  function handleSignOut() {
    navigation('/')
    signOut()
  }

  useEffect(() => {
    async function fetchMovies() {
      const response = await api.get(`/movies?title=${search}&tags=${''}`)
      setMovies(response.data)
    }
    fetchMovies()
  },[search])

  return (
    <>
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
            onFocus={() => setVisible(true)}
          />   
      {   
        visible && 
          <AppearSearch>
              {
              visible && movies.length > 0 ?
              movies.map(movie => <Results key={String(movie.id)} data={movie} id={movie.id}/>)
              : <h1>Não foi possível encontrar o filme</h1>
            }
          </AppearSearch>
      }
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
  
  
    </>
  )
}