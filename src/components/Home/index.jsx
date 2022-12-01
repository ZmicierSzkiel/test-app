import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchUsers } from "../../asyncAction/"
import { changeStatusAction } from "../../store/persistanceReducer"

import Card from "../Card"

import styles from "./Home.module.scss"

function Home() {
  const users = useSelector((state) => state.users.users)
  const persistance = useSelector((state) => state.persistance)
  const dispatch = useDispatch()

  const [searchValue, setSearchValue] = useState("")

  useEffect(() => {
    if (!users.length) {
      dispatch(fetchUsers())
    }
  })

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
      <div className="d-flex flex-wrap justify-center align-center m-30">
        <button className="mr-20 mb-20" onClick={() => dispatch(fetchUsers())}>
          Load more
        </button>
        <input
          className="mr-20 mb-20"
          type="text"
          value={searchValue}
          placeholder="Search..."
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <div>
          <input
            type="checkbox"
            name="perState"
            id="perState"
            className="mb-20"
            value={persistance.status}
            onChange={() => dispatch(changeStatusAction())}
          />
          <label htmlFor="perState">Persistant State</label>
        </div>
      </div>
      <div className={styles.container}>{renderUsers()}</div>
    </>
  )
}

export default Home
