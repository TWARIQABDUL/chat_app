import React, {createContext, useState,useEffect} from "react";
const SessionContext = createContext({});

export const SessionProvider = ({children})=>{
    const storedData = window.localStorage.getItem('sessionData');
    const GOOD_SESSION =JSON.parse(storedData);
    const [session,steSes] = useState(GOOD_SESSION)
    const setSession=(valu)=>{
        steSes(valu)
    }
    return(
        <SessionContext.Provider value={{session,setSession}}>
            {children}
        </SessionContext.Provider>
    )
}
export default SessionContext

