import Bottomnav from "../Bottomnav/Bottomnav";
import Container from "../Container/Container";
import Header from "../Header/Header";

const Home = () => {
  return (
    <>
      <div className=" mx-auto h-auto fs">
        <Header />
        <Bottomnav icones={true} />
        <Container />
      </div>
    </>
  );
};

export default Home;
