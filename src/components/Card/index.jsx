import { useSelector } from "react-redux"

import styles from "./Card.module.scss"

function Card({ id, picture, name, location, cell }) {
  const users = useSelector((state) => state.users)

  return (
    <div className="d-flex flex-wrap">
      {users.length > 0 ? (
        <div className={styles.card}>
          <div key={id.value}>
            <img src={picture.thumbnail} alt="user" />
            {`${name.first} ${name.last}`}
            {cell}
            {`${location.city}, ${location.state}, ${location.country}`}
          </div>
        </div>
      ) : (
        <div>Press the button to upload more clients...</div>
      )}
    </div>
  )
}

export default Card
