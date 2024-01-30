import { Link } from "react-router-dom";

function EmptyCart() {
  return (
    <div className="empty container2">
      <p className="mt-7 font-semibold">
        Your cart is still empty. Start purchasing courses ✨
      </p>
      <Link to="/courses">
        <button className="login">&larr; Back to Purchase Courses</button>
      </Link>
    </div>
  );
}

export default EmptyCart;
