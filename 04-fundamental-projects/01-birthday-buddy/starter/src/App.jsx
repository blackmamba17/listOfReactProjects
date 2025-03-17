import { Title } from "./Components/Title";
import { Ulist } from "./Components/Ulist";
import listOfPersons from './data'
import { useState } from "react";

const App = () => {
  const [getListOfPersons, setListOfPersons] = useState(listOfPersons)
  return (

    <div className="appContainer">
      <Title titleString={getListOfPersons.length + " birthdays today"} />
      <Ulist getListOfPersons={getListOfPersons} />
      <button onClick={() => {
        setListOfPersons([])
      }} className="btn">clear all</button>
    </div>
  )
};
export default App;
