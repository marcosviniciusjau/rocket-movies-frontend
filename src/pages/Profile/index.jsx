import { useState } from "react";
import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from "react-icons/fi";
import { Link } from 'react-router-dom';

import { useAuth } from "../../hooks/auth";

import { api } from "../../services/api";

import { Input } from "../../components/Input";
import { Button } from '../../components/Button';

import photoPlaceholder from "../../assets/photo_placeholder.svg";

import { Container, Form, Photo } from "./styles";

export function Profile() {
  const { user, updatedProfile } = useAuth();

  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [passwordOld, setPasswordOld] = useState("");
  const [passwordNew, setPasswordNew] = useState("");

  const photoUrl = user.photo ? `${api.defaults.baseURL}/files/${user.photo}` : photoPlaceholder;

  const [photo, setPhoto] = useState(photoUrl);
  const [photoFile, setPhotoFile] = useState(null);

  async function handleUpdate() {
    const updated = {
      name,
      email,
      password: passwordNew,
      old_password: passwordOld
    };

    const userUpdated = Object.assign(user, updated);

    await updatedProfile({ user: userUpdated, photoFile });
  }

  function handleChangePhoto(event) {
    const file = event.target.files[0];
    setPhotoFile(file);

    const imagePreview = URL.createObjectURL(file);
    setPhoto(imagePreview);
  }

  return (
    <Container>
      <header>
        <Link to="/">
          <FiArrowLeft size={24} />
        </Link>
      </header>

      <Form>
        <Photo>
          <img
            src={photo}
            alt={user.name}
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
          onChange={e => setPasswordOld(e.target.value)}
        />

        <Input
          placeholder="Nova senha"
          type="password"
          icon={FiLock}
          onChange={e => setPasswordNew(e.target.value)}
        />

        <Button title="Salvar" onClick={handleUpdate} />
      </Form>
    </Container>
  )
}