import useTitle from "../../Hook/useTitle";
import Slider from "../Slider/Slider";
import TabSection from "../TabSection/TabSection";


const Home = () => {
    useTitle('Home')
    return (
        <div>
            <Slider></Slider>
            <TabSection></TabSection>
        </div>
    );
};

export default Home;