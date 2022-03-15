import axios from 'axios';
import React, { useState, useContext, useEffect } from 'react';

const ApiContext = React.createContext();

export const useApi = () => useContext( ApiContext );

function ApiProvider({ children }) {
    
    // const [ user, setUser ] = useState({});
    // const [ ride, setRide ] = useState([]); 
    // const [ filters, setFilters ] = useState({ state:"", city: "" });
    // const [ status, setStatus ] = useState(""); // upcoming, past
    // const url="https://assessment.api.vweb.app/user";
    // useEffect(() => {
    //     const loadData= async ()=> {
    //        const respUser= await axios.get(url);
    //        const respRide= await axios(`https://assessment.api.vweb.app/rides`);
    //        setUser( respUser.user);
    //        setRide( respRide.ride );
                
    //     };
    //     loadData();
    // }, [ setUser, setRide ]);
   
    const [ user, setUser ] = useState({});
    const [ ride, setRide ] = useState([]); 
    const [ filters, setFilters ] = useState({ state:"", city: "" });
    const [ status, setStatus ] = useState(""); // upcoming, past
    useEffect(() => {
          loadData();
    }, [ setUser, setRide ]);
    const loadData= async ()=> {
        await fetch('./Data.json')

        .then( response => response.json() )    
        .then(res => {
           // console.log(res.user);
            setUser( res.user );
            setRide( res.ride );
        });       
    };
    //  Upcoming ride: It shows all rides which has date in future. 
    //we have to filter the data by applying filter on state and city
    
    function selectUpcomingRides() {
        const date = new Date();
        const now = date.getTime();
        
        return ride.filter( obj => {
            const filterState = filters.state ? obj.state === filters.state : !filters.state;
            const filterCity  = filters.city  ? obj.city === filters.city : !filters.city;
    
            return (obj.date * 1000 >= now) && filterState && filterCity
        });
    }


     //Past ride: It shows all rides which has date in past
     //we have to filter the data by applying filter on state and city
    function selectPastRides() {
        const date = new Date();
        const now = date.getTime();
        
        return ride.filter( obj => {
            const filterState = filters.state ? obj.state === filters.state : !filters.state;
            const filterCity  = filters.city  ? obj.city === filters.city : !filters.city;
    
            return (obj.date * 1000 < now) && filterState && filterCity
        });
    }


    function selectAllRides() {
        return ride.filter( obj => {
            const filterState = filters.state ? obj.state === filters.state : !filters.state;
            const filterCity  = filters.city  ? obj.city === filters.city : !filters.city;
    
            return filterState && filterCity
        });
    }

    
    /* return Ride by selected ( status ) // upcoming, past and "" ( for all rides )  
     * Apply the Filter by:
     *  --- state
     *  --- city
     */

    const getRides = () => {

        switch(status) {
            case "upcoming": 
            return selectUpcomingRides();

            case "past": 
            return selectPastRides();

            default: 
            return selectAllRides();
        }
    }

    //now we have to handle status of state and filter state
    const handleStatus = ( state ) => {
        setStatus( state );
    }
    const handleFilters = ( obj ) => {
        setFilters( obj );
    } 

    
    const value = {
        handleStatus,
        handleFilters,
        selectUpcomingRides,
        selectPastRides,
        getRides,
        filters,
        status,
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