import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { authContext } from "../../components/AuthProvider/AuthProvider";


const Bookings = () => {
    const { user } = useContext(authContext);
    const [bookings, setBookings] = useState([]);

    const url = `http://localhost:5000/bookings?email=${user?.email}`;
    useEffect(() => {
         fetch(url)
           .then((res) => res.json())
           .then((data) => {
             setBookings(data);
           });
        
   },[])
    
    return (
        <div>
        {console.log(bookings)}
            <h1>bookings</h1>
        </div>
    );
};

export default Bookings;