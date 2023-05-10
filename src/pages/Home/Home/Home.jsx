import Banner from "../../../components/Banner/Banner";
import NavBar from "../../Shared/NavBar/NavBar";
import About from "../About/About";


const Home = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Banner></Banner>
            <About></About>
        </div>
    );
};

export default Home;