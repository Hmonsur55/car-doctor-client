import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { authContext } from "../../components/AuthProvider/AuthProvider";
import BookingsRow from "./BookingsRow";


const Bookings = () => {
    const { user } = useContext(authContext);
    const [bookings, setBookings] = useState([]);
console.log(user)
  const url = `http://localhost:5000/bookings?email=${user?.email}`;
  console.group(url)
    useEffect(() => {
         fetch(url)
           .then((res) => res.json())
           .then((data) => {
             setBookings(data);
           });
        
    }, [])
  
    console.log(bookings)
    return (
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Name</th>
              <th>Service </th>
              <th>Email</th>
              <th>Price</th>
              <th>Date</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map(booking => <BookingsRow
              key={booking._id}
              booking={booking}
            ></BookingsRow>)}
          </tbody>
          
        </table>
      </div>
    );
};

export default Bookings;