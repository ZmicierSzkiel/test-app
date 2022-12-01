import axios from "axios"
import { addUsersAction } from "../store/userReducer"

export const fetchUsers = () => {
  return async (dispatch) => {
    try {
      await axios
        .get("https://randomuser.me/api/?results=8")
        .then((response) => dispatch(addUsersAction(response.data.results)))
    } catch (error) {
      alert("Error while reaching the server :(")
      console.log(error)
    }
  }
}
