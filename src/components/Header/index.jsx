import { Container, Profile, Brand, Search } from './styles'
import { Input } from '../Input'
export function Header() {
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
            src="https://github.com/marcosviniciusjau.png"
            alt="Foto do usuário"
          />
          <div className="user">  
            <strong>Marcos Vinicius</strong>
            <span>sair</span>
          </div>
        
        </div>
      </Profile>
    </Container>
  )
}