import { useNavigate } from 'react'

import { Container, Content } from './styles'
import { Movie } from '../../components/Movie'
import { Header } from '../../components/Header'
import { SectionHome } from '../../components/SectionHome'
export function Home() {
  const navigate = useNavigate()
 
  function handleDetails(id){
    navigate(`/details/${id}`)
  }
  return (
    <Container>
    
      <Header />

      <Content>
        <SectionHome title="Meus filmes">
          {
            movies.map(movie=>(
              <Movie 
                key={String(movie.id)}
                data={movie}
                onClick={() => handleDetails(movie.id)}
              />
            ))
  
          }
        </SectionHome>
   </Content>
    </Container>
  )
}