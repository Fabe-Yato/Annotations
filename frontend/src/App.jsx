import "./app.css"
import "./global.css"
import "./sidebar.css"
import "./main.css"

import Notes from "./components/Notes/Notes"
import { useEffect, useState } from "react"
import api from "./services/api"
import RadioButton from "./components/RadioButton/RadioButton"

function App() {

  const [ title, setTitle ] = useState("");
  const [ notes, setNotes ] = useState("");
  const [ allNotes, setAllNotes ] = useState([]);

  useEffect(() => {
    const getAllnotes = async () => {
      const response = await api.get("/annotations");

      setAllNotes(response.data)
    }

    getAllnotes()
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await api.post("/annotations", {
      title, 
      notes,
      priority: false,
    });//usando o axios importado de api.js para fazer a requisição post em annotations 

    setTitle("");
    setNotes("");

    setAllNotes([...allNotes, response.data ]);
  }

  useEffect(() => {
    const enableSubmitButton = () => {
      let btn = document.getElementById("btn-submit");
      btn.style.background = "#FFD3CA";
      if(title && notes){
        btn.style.background = "#EB8F7A";
      }
    }
    enableSubmitButton()
  }, [title, notes]);


  return (
    <>
      <div id="app">
        <aside>
          <h2>Caderno de Notas</h2>
          <form onSubmit={handleSubmit}>
            
            <div className="input-block">
              <label htmlFor="title">Título da Anotação</label>
              <input 
                required
                value={title}
                onChange={e => setTitle(e.target.value)}/>
            </div>
            
            <div className="input-block">
              <label htmlFor="nota">Anotação</label>
              <textarea 
                required 
                maxLength="30"
                value={notes}
                onChange={e => setNotes(e.target.value)} />
            </div>

            <button id="btn-submit" type="submit">Salvar</button>
          </form>
          <RadioButton />
        </aside>
        <main>
            <ul>
              {allNotes.map(data => (
                <Notes data={data}/>
              ))}
            </ul>
        </main>

      </div>
    </>
  )
}

export default App
