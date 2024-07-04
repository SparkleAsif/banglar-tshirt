import React, { createContext, useState } from "react";
import Father from "../Father/Father";
import Uncle from "../Uncle/Uncle";
import Aunty from "../Aunty/Aunty";

export const RingContext = createContext("gold");
export const MoneyContext = createContext(0);

const Grandpa = () => {
  const ring = "diamond";
  const [money , setMoney] = useState(0)
  
  return (
    <div className="m-5 border  rounded-md border-orange-400 p-4 flex-1 items-center justify-center w-full ">
      <h2 className="font-bold text-3xl m-3">GrandPa</h2>
    <p>Has Money: {money}</p>

      <MoneyContext.Provider value={[money,setMoney]}>
      <RingContext.Provider value="golden ring" >
        <section className="flex space-x-4 w-full">
          <div className="border  rounded-md border-orange-400 p-4 flex-1 flex items-center justify-center">
            <Father ring={ring} />
          </div>
          <div className="border rounded-md border-orange-400 p-4 flex-1 flex items-center justify-center">
            <Uncle />
          </div>
          <div className="border rounded-md border-orange-400 p-4 flex-1 flex items-center justify-center">
            <Aunty ring={ring} />
          </div>
        </section>
      </RingContext.Provider>
      </MoneyContext.Provider>
    </div>
  );
};

export default Grandpa;

/**
 * 1.create a context and export
 * 2. create a provider and pass a value
 * 3. use--> useContext() to receive value
 * 
 */
