import { useEffect } from "react";
import { useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch("services.json")
          .then((res) => res.json())
          .then((data) => setServices(data));
    }, [])
    

    return (
      <div>
        <div className="text-center space-y-4 my-4">
          <h3 className="text-orange-500 font-bold text-2xl">Service</h3>
          <h1 className="text-4xl font-bold">Our Service Area</h1>
          <p className="text-lg">
            the majority have suffered alteration in some form, by injected
            humour, or randomised <br></br> words which do not look even
            slightly believable.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-5">
                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>)
          }
        </div>
      </div>
    );
};

export default Services;