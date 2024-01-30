import CourseList from "./CourseList";

function StudentProfile() {
  const savedUsername = localStorage.getItem("uname1");
  const savedPassword = localStorage.getItem("pswd1");
  return savedPassword !== "" && savedUsername !== "" ? (
    <>
      <div className="profile-content">
        <CourseList />
      </div>
    </>
  ) : (
    <>
      <div className="empty profile-content">
        <p>
          {" "}
          Your cart is empty! Please Login and start purchasing our courses!
        </p>
      </div>
    </>
  );
}

export default StudentProfile;
