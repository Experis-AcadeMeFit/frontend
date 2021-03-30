import React, { useState, createContext } from "react";

export const  MusclesFigureContext = createContext();
export const MusclesListContext = createContext();

export const CartProvider = props => {
  const [musclegroup,setMusclegroup] = useState(["front"]);
  const [musclesList,setMusclesList]=useState(["front"])


  return (
    < MusclesFigureContext.Provider value={[musclegroup,setMusclegroup]}>
         <MusclesListContext.Provider value={[musclesList,setMusclesList]}>

      {props.children}
      </MusclesListContext.Provider>
    </ MusclesFigureContext.Provider>
  );
};

