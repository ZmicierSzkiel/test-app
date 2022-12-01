import styles from "./Card.module.scss"

function Card({ id, picture, name, location, cell }) {
  const fullName = `${name.first} ${name.last}`
  const place = `${location.city}, ${location.state}, ${location.country}`

  return (
    <div>
      <div className={styles.card}>
        <div
          className={styles.cardColor}
          style={{
            backgroundColor:
              `#` +
              (Math.random().toString(16) + "000000")
                .substring(2, 8)
                .toUpperCase(),
          }}
        />
        <div key={id.value}>
          <div className={styles.flexCenter}>
            <img src={picture.medium} alt="user" className={styles.logo} />
          </div>
          <div style={{ padding: "10px" }}>
            <h5 className={styles.flexCenter}>{fullName}</h5>
            <div className={styles.flexCenter}>{cell}</div>
            <div className={styles.flexCenter}>
              <p style={{ minHeight: "40px" }}>{place}</p>
            </div>
          </div>
          <div className={styles.flexCenter}>
            <button className="cu-p">addFollow</button>
            <img
              src="assets/chat.svg"
              alt="chat"
              width={23}
              height={22}
              className="cu-p ml-10"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
