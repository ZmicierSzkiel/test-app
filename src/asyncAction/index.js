import axios from "axios"
import { addUsersAction } from "../store/userReducer"

export const fetchUsers = () => {
  return (dispatch) => {
    axios
      .get("https://randomuser.me/api/?results=8")
      .then((response) => dispatch(addUsersAction(response.data.results)))
  }
}
