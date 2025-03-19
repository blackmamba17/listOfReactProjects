import React, { useEffect, useState } from "react";

export const CarouselOfTours: React.FunctionComponent<{ url: string }> = ({ url }) => {
    //with this i am going to load the component after the data are fetched
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        console.log('component mounted, now fetching data and set the loader');
        const fetchData = async () => {
            const data = await fetch(url)
            const tours = await data.json()
            return tours
        }
        const tours = fetchData();
        console.log(tours);


    }, []) //adding the empty [] to set the effects to happen only at first render
    //whenever the component needs to re-render, it doesnot do the useeffect
    //for better performance


    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            {isLoading && <h3>loading data...</h3>}
        </div>

    )

}