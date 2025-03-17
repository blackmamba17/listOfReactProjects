import { useEffect, useState } from "react";

const CleanupFunction = () => {
  const [toggle, setToggle] = useState(false)
  return <div>
    <button className="btn" onClick={() => {
      setToggle(!toggle)

    }}>toggle component</button>
    {toggle && <RandomComponent />}
  </div>
};

const RandomComponent = () => {
  useEffect(() => {
    const someFunc = () => {

    }
    window.addEventListener('scroll', someFunc)
    return () => {
      window.removeEventListener('scroll', someFunc)
    }
  }, [])
  return <h1>hello there pakkio</h1>
}

export default CleanupFunction;
