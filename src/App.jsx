import { useDispatch } from "react-redux"
import { fetchUsers } from "./asyncAction"
import Home from "./components/Home"

function App() {
  const dispatch = useDispatch()

  return (
    <div className="App clear">
      <header className="App-header"></header>
      <div className="container">
        <Home />
        <button onClick={() => dispatch(fetchUsers())}>Load more</button>
      </div>
    </div>
  )
}

export default App
