import { useEffect, useState } from "react";
import axios from "axios";

const Users = () => {
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const data = await axios.get("http://localhost:3001/person/getAll", {
          withCredentials: true,
        });
        console.log(data);
        setUserData(data);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);
  console.log(userData);
  return <div></div>;
};

export default Users;
