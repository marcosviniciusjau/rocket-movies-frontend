import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from 'react-icons/fi'
import { useState } from 'react'
import { Link } from 'react-router-dom'

import { useAuth } from '../../hooks/auth'
import { api } from '../../services/api'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

import photoPlaceholder from '../../assets/photo_placeholder.svg'

import { Container, Form, Photo } from "./styles";

export function Profile() {
  const { user, updateProfile } = useAuth()
  const [name, setName] = useState(user.name)
  const [email, setEmail] = useState(user.email)
  const [newPassword, setNewPassword] = useState('')
  const [oldPassword, setOldPassword] = useState('')

  const photoUrl = user.photo ? `${api.defaults.baseURL}/files/${user.photo}` : photoPlaceholder

  const [photo, setPhoto] = useState(photoUrl)
  const [photoFile, setPhotoFile] = useState(null)
  async function handleUpdate() {
    const user = {
      name,
      email,
      password: newPassword,
      oldPassword
    }
    updateProfile({ user, photoFile })
  }

  function handleChangePhoto(e) {
    const file = e.target.files[0]
    setPhotoFile(file)
  
    const photoFile = URL.createObjectURL(file)
    setPhoto(photoFile)
  }
  return (
    <Container>
      <header>
        <Link to="/">
          <FiArrowLeft />
          <>Voltar</>
        </Link>
      </header>

      <Form>
        <Photo>
          <img
            src={photo}
            alt="Foto do usuário"
          />
          <label htmlFor="photo">
            <FiCamera />

            <input
              id="photo"
              type="file"
              onChange={handleChangePhoto}
            />
          </label>
        </Photo>

        <Input
          placeholder="Nome"
          type="text"
          icon={FiUser}
          value={name}
          onChange={e => setName(e.target.value)}
        />

        <Input
          placeholder="E-mail"
          type="text"
          icon={FiMail}
          value={email}
          onChange={e => setEmail(e.target.value)}
        />

        <Input
          placeholder="Senha atual"
          type="password"
          icon={FiLock}
          value={oldPassword}
          onChange={e => setOldPassword(e.target.value)}
        />

        <Input
          placeholder="Nova atual"
          type="password"
          icon={FiLock}
          value={newPassword}
          onChange={e => setNewPassword(e.target.value)}
        />

        <Button title="Salvar" onClick={handleUpdate}/>
      </Form>
    </Container>
  )
}