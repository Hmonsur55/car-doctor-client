const BookingsRow = ({ booking }) => {
    const {_id, name, services_title, price, img, date, email } = booking;
    
    const handleDelete = id => {
        const proceed = confirm('are you want to delete')
        if (proceed) {
            fetch(`http://localhost:5000/bookings/${id}`, {
              method: "DELETE",
            })
              .then((res) => res.json())
              .then((data) => {
                  console.log(data);
                  if (data.deletedCount > 0) {
                      alert('user has been delete successfully')
                  }
              });
        }
    }
  return (
    <tr>
      <th>
        <button onClick={()=>handleDelete(_id)} className="btn btn-circle btn-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="rounded w-24 h-24">
            <img src={img} alt="Avatar Tailwind CSS Component" />
          </div>
        </div>
      </td>
      <td>{services_title}</td>
      <td>{email}</td>
      <td>{price}</td>
      <td>{date}</td>
      <th>
        <button className="btn btn-ghost btn-xs">details</button>
      </th>
    </tr>
  );
};

export default BookingsRow;
