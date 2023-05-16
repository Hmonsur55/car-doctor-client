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
  
   const handleDelete = (id) => {
     const proceed = confirm("are you want to delete");
     if (proceed) {
       fetch(`http://localhost:5000/bookings/${id}`, {
         method: "DELETE",
       })
         .then((res) => res.json())
         .then((data) => {
           console.log(data);
           if (data.deletedCount > 0) {
             alert("user has been delete successfully");
             const remaining = bookings.filter(booking => booking._id !== id)
             setBookings(remaining)
           }
         });
     }
   };

  //  zodi kono single data confirm korte chai taile ai ta use korte hobe
  const confirmBooking = id => {
    fetch(`http://localhost:5000/bookings/${id}`, {
      method: "PATCH",
      headers: {
        "content-type" : "application/json"
      },
      body:JSON.stringify({status : "confirm"})
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if (data.modifiedCount > 0) {
          const remaining = bookings.filter(booking => booking._id !== id)
          const updated = bookings.find(booking => booking._id === id)
          updated.status = "confirm"
          const newBookoings = [updated, ...remaining]
          setBookings(newBookoings)
        }
      });
  }
  
   
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
            {bookings.map((booking) => (
              <BookingsRow
                key={booking._id}
                booking={booking}
                handleDelete={handleDelete}
                confirmBooking={confirmBooking}
              ></BookingsRow>
            ))}
          </tbody>
        </table>
      </div>
    );
};

export default Bookings;