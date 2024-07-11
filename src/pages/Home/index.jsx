import { useNavigate } from 'react-router-dom'

import { useState, useEffect } from 'react'

import { api } from '../../services/api'
import { Container, Content } from './styles'
import { Movie } from '../../components/Movie'
import { Header } from '../../components/Header'
import { SectionHome } from '../../components/SectionHome'
export function Home() {
  const [movies, setMovies] = useState([])
  const navigate = useNavigate()


  async function fetchMovies() {
      const response = await api.get(`/movies?title=${''}&tags=${''}`)
      setMovies(response.data)
    }
  function handleDetails(id){
      navigate(`/details/${id}`)
    }
  useEffect(() => {
    fetchMovies()
  }, [])

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