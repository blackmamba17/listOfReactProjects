import { useEffect, useState } from 'react';

const url = "https://api.github.com/users/QuincyLarson"

const MultipleReturnsBasics = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)
  const [user, setUser] = useState({})

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const resp = (await fetch(url))
        if (!resp.ok) throw new Error("404 not found porcodio")

        const user = await resp.json()
        console.log(user);
        setUser(user)


      } catch (error) {
        console.log({ error });
        setError(error.stack)

      }
      setIsLoading(false)
    }

    setTimeout(() => {
      fetchUser();
    }, 2 * 1000);


  }, [])

  if (isLoading) return <h3>Loading the data...</h3>
  if (error != null) return <h2 style={{ color: "red" }}>error {error}</h2>;
  if (user != {}) {
    const { name, bio, company, location, avatar_url } = user
    return <h2>{[name + "\n", bio + "\n", company + "\n", location + "\n", avatar_url + "\n"]}</h2>
  }
};
export default MultipleReturnsBasics;
