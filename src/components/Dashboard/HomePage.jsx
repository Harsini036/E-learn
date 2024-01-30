import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="home1">
      <div className="inner">
        <h1>Delve into varieties of courses!</h1>
        <p>
          At E-Learn, our platform is designed to cater to diverse learning
          needs, offering a plethora of courses spanning from technology and
          business to creative arts.
        </p>
        <Link to="/courses">
          <button className="btn1">Explore courses</button>
        </Link>
      </div>
    </div>
  );
}

export default HomePage;
