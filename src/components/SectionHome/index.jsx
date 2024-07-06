import { Container, NewNote} from './styles'
import { FiPlus } from 'react-icons/fi'
export function SectionHome({ title, children }) {
  return (
    <>
    <Container>
      <h2>{title}</h2>
      <NewNote to="/new">
      <FiPlus />
      Adicionar filme
    </NewNote>
   
      
  </Container> 
    <div>
      {children}
    </div>
  </>
  )
}
