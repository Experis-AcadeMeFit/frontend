import React, { useState, createContext } from "react";

export const MusclesFigureContext = createContext();
export const MusclesListContext = createContext();
export const UserContext = createContext();

export const MusclesProvider = props => {
    
    //context for user
    const [user, setUser] = useState(false);
    //context for SVG Figure
    const [musclegroup, setMusclegroup] = useState(["front"]);
    //context for excercise List
    const [musclesList, setMusclesList] = useState(["front"])

    return (
        < MusclesFigureContext.Provider value={[musclegroup, setMusclegroup]}>
            <MusclesListContext.Provider value={[musclesList, setMusclesList]}>
                {props.children}
            </MusclesListContext.Provider>
        </ MusclesFigureContext.Provider>
    );
};

