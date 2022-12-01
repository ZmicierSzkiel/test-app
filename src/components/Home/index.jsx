import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchUsers } from "../../asyncAction/"

import Card from "../Card"

function Home() {
  const users = useSelector((state) => state.users)
  const dispatch = useDispatch()

  const [searchValue, setSearchValue] = useState("")

  useEffect(() => {
    dispatch(fetchUsers())
  }, [])

  const renderUsers = () => {
    const filteredUsers = users.filter(
      (user) =>
        user.name.first.toLowerCase().includes(searchValue.toLowerCase()) ||
        user.name.last.toLowerCase().includes(searchValue.toLowerCase())
    )

    return filteredUsers.map((user, index) => <Card key={index} {...user} />)
  }
  return (
    <>
      <div className="d-flex justify-around align-center m-30">
        <button onClick={() => dispatch(fetchUsers())}>Load more</button>
        <input
          type="text"
          value={searchValue}
          placeholder="Search..."
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <div>
          <label htmlFor="perState">Persistent State</label>
          <input type="checkbox" name="perState" id="perState" />
        </div>
      </div>
      <div className="d-flex flex-wrap justify-center">{renderUsers()}</div>
    </>
  )
}

export default Home
