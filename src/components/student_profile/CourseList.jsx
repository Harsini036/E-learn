import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearCourses, getCourses } from "./ProfilSlice";
import EmptyCart from "./EmptyCart";
import toast from "react-hot-toast";
import CourseItem from "./CourseItem";

const notify_clear = () =>
  toast.success("Successfully removed all items from the cart!");

function CourseList() {
  const courseList = useSelector(getCourses);
  const studentName = localStorage.getItem("uname1");
  const dispatch = useDispatch();
  console.log(courseList);

  if (!courseList.length)
    return (
      <div className="profile-content">
        <EmptyCart />
      </div>
    );
  return (
    <div className="profile-content">
      <h2>Get started with the courses you have enrolled, {studentName}</h2>
      <ul className="cartItems">
        {courseList.map((course) => (
          <CourseItem course={course} key={course.id} />
        ))}
      </ul>

      <div className="cart-bottom">
        <button
          className="cart-btn"
          onClick={() => {
            dispatch(clearCourses());
            notify_clear();
          }}
        >
          Clear cart
        </button>
        <Link to="/courses">
          <button className="back-page">&larr; Back to course Page</button>
        </Link>
      </div>
    </div>
  );
}

export default CourseList;
