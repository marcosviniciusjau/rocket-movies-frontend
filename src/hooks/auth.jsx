import {
  createContext,
  useContext,
  useState,
  useEffect
} from 'react';

const AuthContext = createContext({});

import { api } from "../services/api";

function AuthProvider({ children }) {
  const [data, setData] = useState({});

  async function signIn({ email, password }) {
    try {
      const response = await api.post("sessions", { email, password });
      const { token, user } = response.data;

      localStorage.setItem("@rocket_movies:user", JSON.stringify(user));
      localStorage.setItem("@rocket_movies:token", token);

      api.defaults.headers.authorization = `Bearer ${token}`;

      setData({ token, user });

    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("Não foi possível entrar.");
      }
    }
  }

  async function updatedProfile({ user, photoFile }) {
    try {

      if (photoFile) {
        const fileUploadForm = new FormData();
        fileUploadForm.append("photo", photoFile);

        const response = await api.patch("/users/photo", fileUploadForm);
        user.photo = response.data.photo;
      }

      await api.put("/users", user);

      localStorage.setItem("@rocket_movies:user", JSON.stringify(user));

      setData({
        token: data.token,
        user,
      });

      alert("Perfil atualizado!");
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("Não foi possível atualizar o perfil.");
      }
    }
  }

  function signOut() {
    localStorage.removeItem("@rocket_movies:token");
    localStorage.removeItem("@rocket_movies:user");

    setData({});
  }


  useEffect(() => {
    const token = localStorage.getItem("@rocket_movies:token");
    const user = localStorage.getItem("@rocket_movies:user");

    if (token && user) {
      api.defaults.headers.authorization = `Bearer ${token}`;

      setData({
        token,
        user: JSON.parse(user)
      });
    }
  }, []);

  return (
    <AuthContext.Provider value={{
      signIn,
      signOut,
      updatedProfile,
      user: data.user
    }}>
      {children}
    </AuthContext.Provider>
  )
}

function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth };