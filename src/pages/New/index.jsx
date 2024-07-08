import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'

import { Textarea } from '../../components/Textarea'
import { MovieItem } from '../../components/MovieItem'
import { Section } from '../../components/Section'
import { Button } from '../../components/Button'
import { Header } from '../../components/Header'
import { Input } from '../../components/Input'

import { Container, Form } from './styles'
import { FiArrowLeft } from 'react-icons/fi'
import { api } from '../../services/api'
export function New() {
  const [title,setTitle] = useState('')
  const [rating,setRating] = useState('')
  const [description,setDescription] = useState('')

  const [tags, setTags] = useState([])
  const [newTag, setNewTag] = useState('')

  const navigate = useNavigate()

  function handleAddTag() {
    setTags(prevState => [...prevState, newTag])
    setNewTag('')
  }

  function handleRemoveTag(deleted) {
    setTags(prevState => prevState.filter(
      tag => tag !== deleted
    ))
  }

  async function handleNewMovie() {
    try {
      if(!title || !rating) {
        return alert('Preencha todos os campos!')
      }
      if(newTag){
        return alert('Você deixou um campo vazio. Clique em Adicionar para adicionar sua tag')
      }
      const movie = {
        title,
        description,
        tags
      }
      await api.post('/movies', movie)

      alert('Filme criado com sucesso!')
      navigate('/')
    } catch (error) {
      if(error.response) {
        alert(error.response.data.message)
      } else {
        alert('Não foi possível criar o filme')
      }
    }
 
  }
  return (
    <Container>
      <Header />

      <main>
        <Form>  
          <Link to="/">
            <FiArrowLeft />
            Voltar
          </Link>
          <header>
            <h1>Novo filme</h1>
          
          </header>
          <div className="inputs">
          <Input 
            placeholder="Título" 
            value={title} 
            onChange={(e) => setTitle(e.target.value)}
            />
          
          <Input 
            placeholder="Sua nota (de 0 a 5)"  
            value={rating} 
            onChange={(e) => setRating(e.target.value)} />
          </div>
          <Textarea 
            placeholder="Observações"
            value={description} 
            onChange={(e) => setDescription(e.target.value)}/>

          <Section title="Marcadores">
            <div className="tags">
             {
              tags.map((tag, index) => (
                <MovieItem 
                  value={tag}
                  key={index}
                  onClick={()=>(handleRemoveTag(tag))}
                  />
              ))
             }
              <MovieItem 
                isNew 
                placeholder="Novo marcador"
                onChange={(e) => setNewTag(e.target.value)}
                value={newTag}
                onClick={handleAddTag}
              />
            </div>
          </Section>

          <div className="buttons">
            <Button title="Excluir filme" />
            <Button title="Salvar alterações" onClick={handleNewMovie}/>
          </div>
        </Form>
      </main>
    </Container>
  )
}