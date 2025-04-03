import { ButtonBar } from "./components/ButtonBar";
import { Title } from "./components/Title";
import { ArrayOfCards } from "./components/ArrayOfCards"
import { menu } from './data'
import { useState } from "react";

const arrayOfButtonLabels = ['all', 'breakfast', 'lunch', 'shakes']

const App = () => {

  const [getTypeOfMenu, setTypeOfMenu] = useState(menu)

  return (
    <div style={{ width: "100%", height: "100%", display: "flex", justifyContent: "center", backgroundColor: "#f8fafc" }}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "40%" }}>
        <Title title="Our Menu" />
        <ButtonBar arrayOfButtonLabels={arrayOfButtonLabels} setTypeOfMenu={setTypeOfMenu} />
        <ArrayOfCards ArrayOfCards={getTypeOfMenu} />
      </div>
    </div>

  )
};
export default App;
