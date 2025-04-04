import { useEffect, useState } from "react";
import { ButtonBar } from "./components/ButtonBar.tsx";
import React from "react";
import { Tab } from "./types/Types.ts";
import { TabHero } from "./components/TabHero.tsx";

const url = 'https://www.course-api.com/react-tabs-project';

const App = () => {

  const [getTabs, setTabs] = useState<Tab[]>()
  const labels = getTabs?.map((tab) => {
    return tab.company
  })
  const [isLoading, setIsLoading] = useState(false)
  const [getIndexTab, setIndexTab] = useState(0)

  useEffect(() => {

    (async () => {
      try {
        setIsLoading(true)
        const data = await fetch(url)
        if (!data.ok) throw new Error('errore nella richiesta dati')
        const response = await data.json()
        console.log({ response, data });
        setTabs(response)
      } catch (error) {
        console.error(error.message)
      } finally {
        setTimeout(() => {
          setIsLoading(false)
        }, 2000);
      }
    })()

  }, [])

  console.log({ getTabs })
  if (isLoading) return 'loading...'


  if (getTabs) {
    return (
      <div style={{
        width: "100vw", height: "100vh", display: "flex", flexDirection: "row", justifyContent: "center"
      }}>
        <ButtonBar labels={labels} setIndexTab={setIndexTab} />
        <TabHero tab={getTabs[getIndexTab]} />

      </div>
    )
  }

};
export default App;
