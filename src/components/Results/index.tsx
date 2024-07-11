import { Container } from './styles'
import { useNavigate } from 'react-router-dom'


export function Results({ id,data, ...rest }) {
  const navigate = useNavigate()
  function handleDetails(id){
    navigate(`/details/${id}`)
  }
  return (
    <Container 
    {...rest} 
    onClick={() => handleDetails(data.id)}>
      <h1>{data.title}</h1>
       
    </Container>
  )
}