import React, {createContext, useContext, useState} from 'react';


const StateContext = createContext()

const initialState ={
    cart: false,
    userProfile: false,
    notification: false,
}

export const ContextProvider = ( { children}) =>    {

        const [activeBar, setActiveBar ] = useState(true);

        return (
            <StateContext.Provider
                value={ {
                        activeBar,
                        setActiveBar,

                }}  
            >   
                    {children }
            </StateContext.Provider>
        )
}

export const useStateContext = () => useState(StateContext)