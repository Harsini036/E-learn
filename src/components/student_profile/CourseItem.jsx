import { useEffect, useState } from "react";
import DeleteItem from "./DeleteItem";
import MarkAsCompleted from "./MarkAsCompleted";
import { useDispatch } from "react-redux";
import { updateProgress } from "./ProfilSlice";
/* import { getProgress } from "./ProfilSlice";
import { useSelector } from "react-redux"; */

function CourseItem({ course }) {
  const dispatch = useDispatch();
  const { id, name, instructor, thumbnail, dueDate, duration, progressBar } =
    course;
  /* const progressBar = useSelector(getProgress(id)); */
  console.log(progressBar);
  const [progress, setProgress] = useState(progressBar);
  return (
    <li className="cartItem">
      <div className="inner1">
        <img src={`/images/categories/${thumbnail}`} alt={thumbnail} />
      </div>

      <div className="inner1">
        <p className="name">{name}</p>
        <p className="author">
          <span>Instructor :</span>
          {instructor}
        </p>
        <p className="level">
          <span>Duration :</span> {duration}
        </p>
        <p className="author">
          <span>DueDate :</span>
          {dueDate} days
        </p>
        <p>
          <span>Progress Status</span>
        </p>

        <input
          type="range"
          value={progress}
          onChange={(e) => {
            setProgress(Number(e.target.value));
            dispatch(updateProgress({ id, progressBar: e.target.value }));
          }}
        />

        {progress < 100 ? (
          <span>{100 - progress} % to complete</span>
        ) : (
          <span>100% Completed</span>
        )}
      </div>

      <div style={{ textAlign: "center" }}>
        <MarkAsCompleted id={id} setProgress={setProgress} />
        <DeleteItem id={id} />
      </div>
    </li>
  );
}

export default CourseItem;
