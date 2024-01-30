import { useDispatch } from "react-redux";

import { deleteItem } from "./ProfilSlice";
import toast from "react-hot-toast";
const notify_delete = () => toast.success("Course removed from the cart!");
function DeleteItem({ id }) {
  const dispatch = useDispatch();
  return (
    <div>
      <button
        className="delete"
        onClick={() => {
          dispatch(deleteItem(id));
          notify_delete();
        }}
      >
        Remove
      </button>
    </div>
  );
}

export default DeleteItem;
