import React, { useEffect, useState } from "react";
import { Tour } from "./Tour";
import { FaSpinner } from "react-icons/fa";
export type TourType = {
    id: string;
    image: string;
    info: string;
    name: string;
    price: string;
};

export const CarouselOfTours: React.FunctionComponent<{ url: string }> = ({
    url,
}) => {
    //with this i am going to load the component after the data are fetched
    const [isLoading, setIsLoading] = useState(true);
    const [arrayOfTours, setArrayOfTours] = useState<TourType[]>();
    const [fetchError, setFetchError] = useState({
        isError: false,
        typeOfError: "",
    });
    useEffect(() => {
        console.log("component mounted, now fetching data and set the loader");
        //fetching data from external API
        (async () => {
            if (url) {
                //if url exists then try the fetch
                try {
                    const response = await fetch(url);
                    const data: TourType[] = await response.json();
                    console.log("array of tours ", data);
                    setTimeout(() => {
                        setIsLoading(false);
                        setArrayOfTours(data);
                    }, 2 * 1000);
                } catch (error) {
                    setFetchError({
                        isError: true,
                        typeOfError: "an error occured, maybe the url is wrong",
                    });
                }
            } else {
                console.log("url not provided!");
                setTimeout(() => {
                    //added this for better ui/ux experience
                    setFetchError({
                        isError: true,
                        typeOfError: "url for fetching data not provided",
                    });
                    setIsLoading(false);
                }, 2 * 1000);
            }
        })();
    }, []); //adding the empty [] to set the effects to happen only at first render
    //whenever the component needs to re-render, it doesnot do the useeffect
    //for better performance

    //function that i use when i click the button to remove an element from the array
    const removeTour = (id: string) => {
        console.log("id of tour clicked " + id);
        const newArrayOfTours = arrayOfTours?.filter((tour) => {
            return tour.id !== id;
        });
        setArrayOfTours(newArrayOfTours);
        console.log(arrayOfTours);
    };

    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "row",
                flexWrap: "wrap",
            }}
        >
            {isLoading && (
                <>
                    {" "}
                    <span
                        style={{
                            display: "inline-block",
                            margin: "2rem",
                            width: "3rem",
                            height: "3rem",
                            borderRadius: "50%",
                            boxShadow: "inset -2px 0 2px 2px green",
                            animation: "rotating 2s linear infinite"
                        }}
                    ></span>
                    <h4 style={{ flexBasis: "100%", textAlign: "center" }}>loading data...</h4>
                </>
            )}
            {fetchError.isError && (
                <h3 style={{ color: "red" }}>{fetchError.typeOfError}</h3>
            )}
            {arrayOfTours &&
                arrayOfTours.map((tour, indexTour) => {
                    return <Tour key={tour.id} tour={tour} removeTour={removeTour} />;
                })}
        </div>
    );
};
