import Banner from "../../../components/Banner/Banner";
import NavBar from "../../Shared/NavBar/NavBar";
import About from "../About/About";
import Services from "../Services/Services";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Services></Services>
        </div>
    );
};

export default Home;