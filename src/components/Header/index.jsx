import { Container, Profile, Brand, Search } from './styles'
import { Input } from '../Input'
import photoPlaceholder from '../../assets/photo_placeholder.svg'
import { api } from '../../services/api'
import { useAuth } from '../../hooks/auth'
export function Header() {

  const { signOut, user } = useAuth()
  const photoUrl = user.photo ? `${api.defaults.baseURL}/files/${user.photo}` : photoPlaceholder

  function handleSignOut() {
    signOut()
  }
  return (
    <Container>
        <Brand>
        <h1>Rocketmovies</h1>
      </Brand>
      <Search>
        <Input placeholder="Pesquisar pelo título" />
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