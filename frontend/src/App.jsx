import "./app.css"
import "./global.css"
import "./sidebar.css"
import "./main.css"
import Notes from "./components/Notes/Notes"

function App() {
  return (
    <>
      <div id="app">
        <aside>
          <h2>Caderno de Notas</h2>
          <form>
            
            <div className="input-block">
              <label htmlFor="title">Título da Anotação</label>
              <input/>
            </div>
            
            <div className="input-block">
              <label htmlFor="nota">Anotação</label>
              <textarea></textarea>
            </div>

            <button type="submit">Salvar</button>
          </form>
        
        </aside>
        <main>
            <ul>
              <Notes />
              <Notes />
              <Notes />
              <Notes />
              <Notes />
            </ul>
        </main>

      </div>
    </>
  )
}

export default App
