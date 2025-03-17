import { useEffect, useState } from "react";

const url = "https://api.github.com/users";

const FetchData = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const data = async () => {
      const test = await fetch(url);

      const dataApi = await test.json();

      console.log(dataApi);
      setUsers(dataApi);
    };
    data();
  }, []);

  return (
    <>
      {users.map((user) => {
        return (<>
          <h1>{user.login}</h1>
          <img src={user.avatar_url} alt="" /></>
        )
      })}
    </>
  )
};

export default FetchData;
