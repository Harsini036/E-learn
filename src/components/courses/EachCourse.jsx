import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../student_profile/ProfilSlice";

import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import toast from "react-hot-toast";

function EachCourse({ course }) {
  const dispatch = useDispatch();
  /* const { name, Author, Rating, src, Price, level, actual_price } = course; */
  const {
    id,
    name,
    instructor,
    description,
    thumbnail,
    duration,
    enrollmentStatus,
    price,
    actual_price,
  } = course;
  /* const dispatch = useDispatch();
  const currentQuantity = useSelector(getCurrentQuantityById(name)); */
  /*  const isInCart = currentQuantity > 0;*/

  function handleAddToCart() {
    const due = Math.floor(Math.random() * 50);
    //console.log(name);
    const newItem = {
      id,
      name,
      instructor,
      duration,
      thumbnail,
      dueDate: due,
      progressBar: 0,
    };
    //console.log(newItem);
    dispatch(addItem(newItem));
  }

  return (
    <div className="each-course">
      <img src={`/images/categories/${thumbnail}`} alt="" />
      <div className="content">
        <p className="name">{name}</p>
        <p className="author">{instructor}</p>
        <p className="description">{description}</p>
        <div className="flex">
          <p className="discount">Rs.{price}</p>
          <p className="actual">Rs.{actual_price}</p>
        </div>

        <p>
          <Link to={`/courses/${id}`}>
            More Details{" "}
            <span>
              <FaArrowRight />
            </span>
          </Link>
        </p>

        {enrollmentStatus === "Open" && (
          <span>
            <button className="cart-btn" onClick={handleAddToCart}>
              Start Course
            </button>
          </span>
        )}
        {enrollmentStatus === "In progress" && (
          <span>
            <button className="cart-btn" onClick={handleAddToCart}>
              Start Course
            </button>
          </span>
        )}

        {enrollmentStatus === "Closed" && (
          <span>
            <button
              className="close"
              onClick={() => {
                toast.error("Course currently closed!");
              }}
            >
              Course Closed
            </button>
          </span>
        )}
      </div>
    </div>
  );
}

export default EachCourse;
