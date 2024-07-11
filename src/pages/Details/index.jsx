import { useState, useEffect } from 'react'
import { Container, Content, Profile, Title } from './styles'

import { useParams } from 'react-router-dom'
import { api } from '../../services/api'
import { useNavigate } from 'react-router-dom'
import dayjs from 'dayjs'
import ptBr from 'dayjs/locale/pt-br'
import photoPlaceholder from '../../assets/photo_placeholder.svg'
import { Tag } from '../../components/Tag'
import { Header } from '../../components/Header'
import { Section } from '../../components/Section'
import { Link } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'
import Star  from '../../assets/star.svg'
import StarOutline  from '../../assets/star_outline.svg'
import { FiClock } from 'react-icons/fi'
import { ButtonText } from '../../components/ButtonText'
import { useAuth } from '../../hooks/auth'
export function Details() {
  const [data, setData] = useState(null)	

  const { user } = useAuth()
  const navigate = useNavigate()
  const params = useParams() 
  const photoUrl = user.photo ? `${api.defaults.baseURL}/files/${user.photo}` : photoPlaceholder

  function handleBack() {
    navigate(-1)
  }

  useEffect(() => {
    async function fetchMovies() {
      const response = await api.get(`/movies/${params.id}`)
      setData(response.data)
    }
    fetchMovies()
  }, [params.id])
  return (
    <Container>
      <Header />

   { 
    data && 
      <main>
        <Content>  
        <Link to="/" onClick={handleBack}>
          <FiArrowLeft />
          <ButtonText title="Voltar"/>
        </Link>
          <Title>
            <h1>
            {data.title}
            </h1>
          </Title>
      <Profile to="/profile">
        <div className="image">
          <img
            src={photoUrl}
            alt="Foto do usuário"
          />
            <span>Por {user.name}</span>
            <FiClock className='clock'/>
            <p>{dayjs(data.created_at).locale(ptBr).format('DD [de] MMMM [de] YYYY [às] HH:mm')}</p>
        </div>  
       
      </Profile>
          <Section>
            {
              data.tags.map(tag => 
              <Tag 
                key={String(tag.id)}
                title={tag.name}
              />
            )
            }
          </Section>
          <p>
            {data.description}
        </p>
        </Content>
      </main>
      }
    </Container>
  )
}