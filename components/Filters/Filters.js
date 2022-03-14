import styles from './Filters.module.css';


export const Filters = () => {
    const { 
        btn_filter,  
        fltr_cm, 
        filter_relative,
        links,
        active,
        icon,
    } = styles;

   //const [ showMenue, setShowMenu ] = useState(false);
   // const { status, handleStatus, selectUpcomingRides, selectPastRides } = useStore()

    // handle classes
    // const nearestRide = status === "" ? active : null
    // const upcoming = status === "upcoming" ? active : null
    // const past = status === "past" ? active : null

    // get rides length
    // const upcomingCount = selectUpcomingRides().length;
    // const pastCount = selectPastRides().length;
    

    return (
        <div className='--container'>
            <div className = { fltr_cm  }>
                <ul className = { links } >
                    <li>
                        Nearest rides
                    </li>

                    <li>
                        <span>Upcoming rides</span>
                    </li>

                    <li>
                        <span>Past rides</span>
                    </li>
                </ul>

            </div>

        </div>
    );
};