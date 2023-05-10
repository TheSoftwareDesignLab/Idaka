import SearchBar from "./SearchBar";
import Sparck from "../Sparck/Sparck";
import "./Home.css";

const Home = () => (
    <div className="fondo">
    <div className="intro">
      <h1 className="title">
        Machine Learning Good Practices for Software Engineering
      </h1>
      <h6 className="subtitle">
        Search for good practices you need for the ML tasks you are working on
      </h6>
    </div>

    <div className="search">
      <SearchBar />
    </div>

    <Sparck message="Welcome! My name is Idaka and I'm here to help you. Start by typing the task you are working on. Remember that you can select the model of your preference for your search." time={12000} repeat={true}/>
  </div>
);

export default Home;
