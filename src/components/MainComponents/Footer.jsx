import "../styles/footer.css";
import { Link } from "react-router-dom";
function Footer() {
  const year = new Date().getFullYear();
  return (
    <div className="footer">
      <div className="footer-inner">
        <div className="links">
          <Link to="/">About</Link>
          <Link to="/">Teach on ezy Learn</Link>
          <Link to="/">Courses</Link>
          <Link to="/">Offers</Link>
        </div>

        <div className="links">
          <Link to="/">Careers</Link>
          <Link to="/">Blogs</Link>
          <Link to="/">Help and Support</Link>
          <Link to="/">Discounts</Link>
        </div>

        <div className="links">
          <Link to="/">Terms</Link>
          <Link to="/">Privacy Policy</Link>
          <Link to="/">Courses</Link>
          <Link to="/">Cookie settings</Link>
        </div>

        <button className="last-item getapp">GET MOBILE APP</button>
      </div>
      <div className="footer-end">
        <img src="/up.png" alt="" className="brandlogo" />
        <p className="copyrights">@{year} E-Learn</p>
      </div>
    </div>
  );
}

export default Footer;
