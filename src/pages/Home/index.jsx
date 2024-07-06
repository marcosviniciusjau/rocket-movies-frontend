import { Container, Content } from './styles'

import { Note } from '../../components/Note'
import { Header } from '../../components/Header'
import { SectionHome } from '../../components/SectionHome'
export function Home() {
  return (
    <Container>
    
      <Header />

      <Content>
        <SectionHome title="Meus filmes">
  
          <Note data={{
            title: 'Interstelar',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto cupiditate at reiciendis odio suscipit voluptatum delectus libero quaerat mollitia autem, natus obcaecati non possimus. Molestiae dicta explicabo magnam soluta nobis',
            tags: [
              { id: '1', name: 'Interstelar'},
              { id: '2', name: 'rocketseat' }
            ]
          }}
          />
        </SectionHome>
   </Content>
    </Container>
  )
}