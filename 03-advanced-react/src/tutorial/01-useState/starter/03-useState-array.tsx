import React, { useState } from "react";
import { LIST_OF_PEOPLE } from "./listOfPeople";
import { data } from "../../../data";

const UseStateArray = () => {
  const [people, setPeople] = useState<typeof data | null>(data);
  return (
    <>
      <ul>
        {people?.map((person, index) => {
          return (
            <li key={`${person?.name}${index}`}>
              <a>
                {person?.name}
                <button
                  onClick={(e) => {
                    people.splice(index, 1);
                    console.log(people);
                    console.log([...people]);

                    setPeople([...people]);
                  }}
                >
                  remove
                </button>
              </a>
            </li>
          );
        })}
      </ul>
      <p>
        <button
          type="button"
          onClick={() => {
            setPeople(null);
          }}
        >
          click to clear
        </button>
      </p>
    </>
  );
};

export default UseStateArray;
