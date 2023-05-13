import { useLoaderData } from "react-router-dom";
import banner from "../../assets/images/checkout/checkout.png";

const Checkout = () => {
  const services = useLoaderData();
  const { title } = services;

  return (
    <div>
      <div>
        <img className="w-full" src={banner} alt="" />
      </div>
      <div className="bg-gray-100">
        <form>
          <div className="card-body">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">First Name</span>
                </label>
                <input
                  name="Firstname"
                  type="text"
                  placeholder=" First Name"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text"> Last Name</span>
                </label>
                <input
                  name="LastName"
                  type="text"
                  placeholder="Last Name"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Phone</span>
                </label>
                <input
                  name="phone"
                  type="text"
                  placeholder="Phone"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                              <input
                                  name="email"
                  type="email"
                  placeholder="Email"
                  className="input input-bordered"
                />
              </div>
            </div>
            <textarea
              className="border"
              name="textarea"
              id=""
              cols="30"
              rows="10"
            ></textarea>
            <div className="form-control mt-6">
              <input
                className="btn btn-block, btn-primary bg-orange-500 border-none"
                type="submit"
                value="Order Confirm"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
