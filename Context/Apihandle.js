import React, { useState, useContext, useEffect } from 'react';

const ApiContext = React.createContext();

export const useApi = () => useContext( ApiContext );



function ApiProvider({ children }) {
    
    const [ user, setUser ] = useState({});
    const [ ride, setRide ] = useState([]); 



    // Fetching Date
    useEffect(() => {

        (async function() {
            await fetch('/Data.json')
            .then( response => response.json() )
            
             .then(res => {
                setUser( res.user );
                setRide( res.ride );

            });


        })()


    }, [ setUser, setRide ]);



    const value = {
        ride,
        user,
    };


    return (
        <ApiContext.Provider value = { value } >
            { children }
        </ApiContext.Provider>
    )
}

export default ApiProvider;