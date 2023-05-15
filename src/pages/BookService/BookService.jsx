import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import banner from "../../assets/images/checkout/checkout.png";
import { authContext } from "../../components/AuthProvider/AuthProvider";
const BookService = () => {
  const { user } = useContext(authContext);
  const services = useLoaderData();
  const { _id, title, price, img } = services;

  const handleBook = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const date = form.date.value;
    const due = form.due.value;

    const bookingInformation = {
      name,
      img,
      email,
      date,
      due,
      services_Id: _id,
      services_title: title,
      price,
    };
    // console.log(bookingInformation);

    fetch(`http://localhost:5000/bookings`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bookingInformation),
    })
      .then((res) => res.json())
      .then((data) => {
          console.log(data);
          if (data.insertedId) {
            alert("boooking has been create successfully");
          }
      });
  };

  return (
    <div>
      <div>
        <img className="w-full" src={banner} alt="" />
      </div>
      <div className="bg-gray-100">
        <form onSubmit={handleBook}>
          <div className="card-body">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  defaultValue={user?.name}
                  name="name"
                  type="text"
                  placeholder="Name"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text"> Date</span>
                </label>
                <input
                  name="date"
                  type="date"
                  placeholder="Date"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  defaultValue={user?.email}
                  name="email"
                  type="email"
                  placeholder="Email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Due Amount</span>
                </label>
                <input
                  defaultValue={"$" + price}
                  name="due"
                  type="text"
                  placeholder="Due Amount"
                  className="input input-bordered"
                />
              </div>
            </div>
            {/* <textarea
                className="border"
                name="textarea"
                id=""
                cols="30"
                rows="10"
              ></textarea> */}
            <div className="form-control mt-6">
              <input
                className="btn btn-block, btn-primary bg-orange-500 border-none"
                type="submit"
                value="Booking Confirm"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookService;
