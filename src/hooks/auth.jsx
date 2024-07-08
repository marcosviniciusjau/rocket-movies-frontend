import { createContext, useContext, useState, useEffect } from "react"
import { api } from "../services/api"

export const AuthContext = createContext({})

function AuthProvider({ children }) {
  const [data, setData] = useState({})
  async function signIn({ email, password }) {
    try {
      const response = await api.post("/sessions",{ email, password })
      const { user, token } = response.data

      localStorage.setItem("@rocket_movies:user", JSON.stringify(user))
      localStorage.setItem("@rocket_movies:token", token)

      api.defaults.headers.common['Authorization'] = `Bearer ${token}`
      setData({ user, token })
    } catch (error) {
      if(error.response){
        alert(error.response.data.message)
      } else {
        alert("Não foi possível entrar")
      }
    }
  }

  function signOut() {
    localStorage.removeItem("@rocket_movies:token")
    localStorage.removeItem("@rocket_movies:user")
    setData({})
  }

  async function updateUser({user, photoUrl}) {
    try {
      if(photoUrl){
        const fileUploadForm = new FormData()
        fileUploadForm.append("photo", photoUrl)

        const response = await api.patch('/users/photo', fileUploadForm)
        user.photo = response.data.photo
      }
       await api.put('/users', user)  
       localStorage.setItem("@rocket_movies:user", JSON.stringify(user))
       setData({user, token: data.token})
       alert("Perfil atualizado")
     
    } catch (error) {
      if(error.response){
        alert(error.response.data.message)
      } else {
        alert("Não foi possível atualizar")
      }
    }
  }

  useEffect(() => {
    const token = localStorage.getItem("@rocket_movies:token")
    const user = localStorage.getItem("@rocket_movies:user")

    if (token && user) {
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`

      setData({
        token,
        user: JSON.parse(user),
      })
    }
  }, [])

  return (
    <AuthContext.Provider value=
    {{ 
      signIn,
      signOut,
      updateUser,
      user: data.user 
      }}>
      {children}
    </AuthContext.Provider>
  )
}

function useAuth() {
  const context = useContext(AuthContext)
  return context
}

// eslint-disable-next-line react-refresh/only-export-components
export { AuthProvider, useAuth }