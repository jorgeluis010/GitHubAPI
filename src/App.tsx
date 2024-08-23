import axios from 'axios'
import './App.css'
import { useState } from 'react'

type GithubData = {
  name: string,
  bio: string,
  avatar_url: string
}

function App() {
  const [userName, SetUserName] = useState("")
  const [name, setName] = useState("Loading...")
  const [bio, setBio] = useState("Loading...")
  const [avatar_url, setAvatarURL] = useState("Loading...")

  const handlePesquisar = () => {
    axios.get<GithubData>(`https://api.github.com/users/${userName}`).then(response => 
    {setName(response.data.name)
    setBio(response.data.bio)
    setAvatarURL(response.data.avatar_url)})
  }

  return (
    <div className="container-geral">
      <div className="container">
        <header className="header-top">
          Projeto EMIDES3AM
        </header>

        <main>
          <div className="form">
            <h1>Pesquisar Github</h1>
            <input type="text" placeholder="Digite o usuario" onChange={e =>SetUserName(e.target.value)} />
            <button onClick={handlePesquisar}>Consultar</button>
          </div>
          <div className="conteudo">
            <div>
              <img src={avatar_url} alt="" />
              <h1>{name}</h1>
              <p>{bio}</p>
            </div>
          </div>
        </main>

      </div>
    </div>
  )
}

export default App

