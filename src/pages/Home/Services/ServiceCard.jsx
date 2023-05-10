const ServiceCard = ({ service }) => {
  const { title, price, img } = service;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={img} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className=" px-10 py-7 space-y-3 items-center text-left">
        <h2 className="card-title">{title}</h2>
        <p> Price : {price}</p>
        <div className="card-actions mt-auto">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
