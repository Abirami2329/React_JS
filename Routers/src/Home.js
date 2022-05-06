import pic from "./img1.jpg";
function Home() {
    return (
      <div>
        <h2>Welcome to Home</h2>
        <div>
        <img src={pic} alt="img"/>
        </div>
      </div>
    );
  }
export default Home;