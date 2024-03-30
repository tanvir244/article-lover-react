import Articles from "../Articles/Articles";
import Banner from "../Banner/Banner";

const Home = () => {
    return (
        <div className="w-[92%] md:max-w-6xl mx-auto">
            <Banner></Banner>
            <Articles></Articles>
        </div>
    );
};

export default Home;