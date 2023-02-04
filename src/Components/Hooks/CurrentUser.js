import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import app from "../../firebase.in";

const CurrentUser = () => {
      const auth = getAuth(app)
        const [getUser, setGetUser] = useState({});
      // console.log("from current user", user)
      // navigate

      const navigate = useNavigate()

      useEffect(() => {
           onAuthStateChanged(auth, user => {
               
               
                     setGetUser(user)
               
           })
      }, [])
      return [getUser, setGetUser];

}

export default CurrentUser;