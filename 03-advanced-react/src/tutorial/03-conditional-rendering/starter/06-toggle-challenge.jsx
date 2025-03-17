import { useState } from "react";

const ToggleChallenge = () => {
  const [isClicked, setIsClicked] = useState(false)


  return <div>
    <div>
      <ul>
        {isClicked ? [...Array(5)].map((_, index) => {
          return <li key={index}>
            <a>test {index}</a>
          </li>
        }) : <div>is clicked toggle activated</div>}
      </ul>
    </div>
    <button className="btn" onClick={() => {
      setIsClicked(!isClicked)
    }}>click me </button>
  </div>
};

export default ToggleChallenge;
