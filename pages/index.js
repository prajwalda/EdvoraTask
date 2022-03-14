import { NavBar } from "../components/Navbar/Navbar";
import { Filters } from "../components/Filters/Filters";
import { Ride } from "../components/Rides/Ride";
export default function Home() {
  return (
   <>
   <NavBar /> 
   <Filters/> 
   <Ride />
   </>
  )
}
