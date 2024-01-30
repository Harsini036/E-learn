import { useDispatch } from "react-redux";
import { markAsCompleted } from "./ProfilSlice";
import toast from "react-hot-toast";
const notify_complete = () =>
  toast.success("Successfully completed the course!");

function MarkAsCompleted({ id, setProgress }) {
  const dispatch = useDispatch();
  return (
    <div>
      <button
        className="completed"
        onClick={() => {
          dispatch(markAsCompleted(id));
          notify_complete();
          setProgress(100);
        }}
      >
        Mark as Completed
      </button>
    </div>
  );
}

export default MarkAsCompleted;
