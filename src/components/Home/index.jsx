import { useSelector } from "react-redux"

import Card from "../Card"

function Home() {
  const users = useSelector((state) => state.users)

  return (
    <div>
      {users.map((user) => (
        <Card key={user.id.value} {...user} />
      ))}
    </div>
  )
}

export default Home
