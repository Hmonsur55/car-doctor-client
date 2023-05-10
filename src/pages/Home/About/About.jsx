import person from '../../../assets/images/about_us/person.jpg'
import parts from '../../../assets/images/about_us/parts.jpg'

const About = () => {
    return (
      <div className="hero min-h-screen">
        <div className=" flex gap-4 lg:flex-row ">
          <div className="relative w-2/3">
            <img src={person} className="w-2/3 rounded-lg shadow-2xl" />
            <img
              src={parts}
              className="w-1/2 rounded-lg shadow-2xl absolute right-5 top-1/2 border-8 border-white"
            />
          </div>
          <div className="w-1/2">
            <h4 className="text-2xl font-bold text-orange-500">About Us</h4>
            <h1 className="text-5xl font-bold">
              We are qualified & of experience in this field
            </h1>
            <p className="py-4">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable.
            </p>
            <p className="py-4">
              the majority have suffered alteration in some form, by injected
              humour, or randomised words which don't look even slightly
              believable.
            </p>
            <button className="btn btn-primary bg-orange-500 border-none">
              Get More Info
            </button>
          </div>
        </div>
      </div>
    );
};

export default About;