import { useDispatch, useSelector } from "react-redux"
import { fetchUsers } from "./asyncAction"
import Card from "./components/Card"

function App() {
  const dispatch = useDispatch()
  const users = useSelector((state) => state.users)

  return (
    <div className="App">
      <header className="App-header"></header>
      <div className="container">
        {users.length > 0 ? (
          <div>
            {users.map((user) => (
              <div>{`${user.name.first} ${user.name.last}`}</div>
            ))}
          </div>
        ) : (
          <div>Press the button to upload more clients...</div>
        )}
        <button onClick={() => dispatch(fetchUsers())}>Load more</button>
        <div>
          <label htmlFor="persistentState" />
          <input type="checkbox" name="checkbox" value="persistentState">
            Persistent state
          </input>
        </div>
      </div>
    </div>
  )
}

export default App
